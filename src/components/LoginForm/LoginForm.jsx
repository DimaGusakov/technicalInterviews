import React, { useState } from 'react';
import { FiEyeOff, FiEye, FiCheckCircle } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/firebase.js';
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty, isValid }
    } = useForm({ mode: "onChange" });

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setErrorMessage("");
        setSuccessMessage("");

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            setSuccessMessage("Вход выполнен успешно! Перенаправляем...");
            setTimeout(() => navigate('/'), 1500);
        } catch (error) {
            console.error("Ошибка входа:", error);
            if (error.code === 'auth/invalid-credential') {
                setErrorMessage("Неверный email или пароль. Проверьте данные и попробуйте снова");
            } else {
                setErrorMessage(error.message);
            }
        }
    };

    return (
        <div className="flex-1 flex items-center justify-center py-16 px-6 md:px-12 bg-gray-50">
            <form className="w-full max-w-md bg-white p-8 rounded-xl shadow-md" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Вход в личный кабинет</h2>

                {successMessage && (
                    <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md flex items-center">
                        <FiCheckCircle className="mr-2 flex-shrink-0" size={20} />
                        <p className="font-medium">{successMessage}</p>
                    </div>
                )}

                {errorMessage && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md">
                        <p className="font-medium text-center">{errorMessage}</p>
                        {errorMessage.includes('пароль')}
                    </div>
                )}

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Электронная почта
                    </label>
                    <input
                        id="email"

                        {...register("email", {
                            required: "Обязательное поле",
                            pattern: {
                                value: /^(?!.*[а-яА-Я])([A-Z0-9._%+-]+)@([A-Z0-9-]+\.)+[A-Z]{2,}$/i,
                                message: "Некорректный email. Используйте латинские буквы, цифры и символы @._%+-"
                            },
                            maxLength: {
                                value: 254,
                                message: "Email слишком длинный (макс. 254 символа)"
                            },
                            validate: {
                                noRussian: v => !/[а-яА-Я]/.test(v) || "Русские буквы не допускаются",
                                validDomain: v => /@.+\.[a-z]{2,}$/i.test(v) || "Некорректный домен",
                                noSpaces: v => !/\s/.test(v) || "Пробелы не допускаются",
                                noSpecialStartEnd: v => !/^[._%+-]|[._%+-]$/.test(v.split('@')[0]) ||
                                    "Email не может начинаться/заканчиваться на ._%+-"
                            }
                        })}
                        className={`block w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-purple-500`}
                        placeholder="example@mail.com"
                        autoComplete="email"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600 font-medium">{errors.email.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Пароль
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                                required: "Обязательное поле",
                                minLength: {
                                    value: 6,
                                    message: "Минимум 6 символов"
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Максимум 30 символов"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                    message: "Пароль должен содержать: заглавные и строчные латинские буквы, цифры"
                                }

                            })}
                            className={`block w-full px-4 py-3 rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-purple-500`}
                            placeholder="••••••••"
                            autoComplete="current-password"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ?
                                <FiEye size={20} className="text-gray-500" /> :
                                <FiEyeOff size={20} className="text-gray-500" />
                            }
                        </button>
                    </div>
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-600 font-medium">{errors.password.message}</p>
                    )}

                </div>

                <div className="flex items-center justify-between mb-6">
                    <Link
                        to="/forgot-password"
                        className="text-sm text-purple-600 font-medium hover:underline"
                    >
                        Забыли пароль?
                    </Link>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting || !isDirty || !isValid}
                    className={`w-full py-3 px-4 bg-purple-600 text-white font-medium rounded-md transition
                        ${(isSubmitting || !isDirty || !isValid) ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700'}`}
                >
                    {isSubmitting ? 'Вход...' : 'Войти'}
                </button>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Нет аккаунта?{' '}
                        <Link
                            to="/register"
                            className="text-purple-600 font-medium hover:underline"
                        >
                            Зарегистрироваться
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;