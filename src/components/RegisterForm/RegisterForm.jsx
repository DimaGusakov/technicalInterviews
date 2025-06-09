import React, { useState } from 'react';
import { FiEyeOff, FiEye, FiCheckCircle } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '@/firebase/firebase.js';
import { useForm } from "react-hook-form";
import { useAddUserMutation } from '@/service/databaseApi';

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isDirty, isValid }
    } = useForm({ mode: "onChange" });

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const [addUser] = useAddUserMutation();

    const onSubmit = async (data) => {
        setErrorMessage("");
        setSuccessMessage("");

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            const newUserData = {
                avatar: "",
                email: userCredential.user.email,
                name: data.name,
                profession: "",
                experience: ""
            };

            await addUser({
                uid: userCredential.user.uid,
                userData: newUserData
            });

            await updateProfile(userCredential.user, {
                displayName: data.name
            });

            setSuccessMessage("Регистрация прошла успешно! Перенаправляем...");
            setTimeout(() => navigate('/profileNavigation/profile'), 2000);

        } catch (error) {
            console.error("Ошибка регистрации:", error);

            // Обработка конкретных ошибок Firebase
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setErrorMessage("Этот email уже зарегистрирован. Используйте другой email или войдите в систему.");
                    break;
                case 'auth/weak-password':
                    setErrorMessage("Пароль слишком слабый. Используйте более сложный пароль.");
                    break;
                case 'auth/invalid-email':
                    setErrorMessage("Некорректный email адрес.");
                    break;
                default:
                    setErrorMessage("Произошла ошибка при регистрации. Пожалуйста, попробуйте позже.");
            }
        }
    };

    return (
        <div className="flex-1 flex items-center justify-center py-16 px-6 md:px-12 bg-gray-50">
            <form
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">РЕГИСТРАЦИЯ</h2>

                {successMessage && (
                    <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md flex items-center">
                        <FiCheckCircle className="mr-2" size={20} />
                        <p className="font-medium">{successMessage}</p>
                    </div>
                )}

                {errorMessage && !successMessage && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md">
                        <p className="font-medium text-center">{errorMessage}</p>
                    </div>
                )}

                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Имя
                    </label>
                    <input
                        id="name"
                        type="text"
                        {...register("name", {
                            required: "Обязательное поле",
                            minLength: {
                                value: 2,
                                message: "Минимум 2 символа"
                            },
                            maxLength: {
                                value: 30,
                                message: "Максимум 30 символов"
                            }
                        })}
                        className={`block w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-purple-500`}
                        placeholder="Введите ваше имя"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600 font-medium">{errors.name.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Электронная почта
                    </label>
                    <input
                        id="email"
                        {...register("email", {
                            required: "Обязательное поле",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Некорректный email"
                            }
                        })}
                        className={`block w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-purple-500`}
                        placeholder="example@mail.com"
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
                                    message: "Пароль должен содержать: заглавные и строчные латинские буквы, цифры."
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

                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Подтвердите пароль
                    </label>
                    <div className="relative">
                        <input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            {...register("confirmPassword", {
                                required: "Подтвердите пароль",
                                validate: value =>
                                    value === watch('password') || "Пароли не совпадают"
                            })}
                            className={`block w-full px-4 py-3 rounded-md border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-purple-500`}
                            placeholder="••••••"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ?
                                <FiEye size={20} className="text-gray-500" /> :
                                <FiEyeOff size={20} className="text-gray-500" />
                            }
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-600 font-medium">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <div className="mb-6">
                    <label className="flex items-start">
                        <input
                            type="checkbox"
                            {...register("agree", {
                                required: "Необходимо ваше согласие"
                            })}
                            className="mt-1 mr-2"
                        />
                        <span className="text-sm text-gray-700">
                            Я согласен на обработку персональных данных
                        </span>
                    </label>
                    {errors.agree && (
                        <p className="mt-1 text-sm text-red-600 font-medium">{errors.agree.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting || !isDirty || !isValid}
                    className={`w-full py-3 px-4 bg-purple-600 text-white font-medium rounded-md transition
                        ${(isSubmitting || !isDirty || !isValid) ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700'}`}
                >
                    {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
                </button>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Уже есть аккаунт?{' '}
                        <Link
                            to="/login"
                            className="text-purple-600 font-medium hover:underline"
                        >
                            Войти
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;