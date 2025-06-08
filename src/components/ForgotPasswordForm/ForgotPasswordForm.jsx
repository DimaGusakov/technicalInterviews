import React, { useState } from 'react';
import { FiMail, FiCheckCircle } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '@/firebase/firebase.js';
import { useForm } from "react-hook-form";

const ForgotPasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty, isValid }
    } = useForm({
        mode: "onChange",
        defaultValues: {
            email: ""
        }
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setErrorMessage("");
        setSuccessMessage("");

        try {
            await sendPasswordResetEmail(auth, data.email);

            setSuccessMessage("Если этот email зарегистрирован в нашей системе, вы получите письмо с инструкциями");
            setIsEmailSent(true);

            setTimeout(() => {
                navigate('/login');
            }, 5000);

        } catch (error) {
            console.error("Ошибка восстановления пароля:", error);

            if (error.code === "auth/invalid-email") {
                setErrorMessage("Неверный формат email адреса");
            } else if (error.code === "auth/too-many-requests") {
                setErrorMessage("Слишком много запросов. Пожалуйста, попробуйте позже");
            } else {
                setErrorMessage("Произошла ошибка при отправке письма");
            }
        }
    };

    return (
        <div className="flex-1 flex items-center justify-center py-16 px-6 md:px-12 bg-gray-50">
            <form
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Восстановление пароля</h2>

                <p className="text-gray-600 mb-8 text-center">
                        Введите email, указанный при регистрации, для получения ссылки восстановления

                </p>

                {successMessage && (
                    <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md flex items-center">
                        <FiCheckCircle className="mr-2 flex-shrink-0" size={20} />
                        <p className="font-medium">{successMessage}</p>
                    </div>
                )}

                {errorMessage && !successMessage && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md">
                        <p className="font-medium text-center">{errorMessage}</p>
                    </div>
                )}

                {!isEmailSent && (
                    <>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Электронная почта
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email обязателен",
                                        pattern: {
                                            value: /^(?!.*[а-яА-Я])([A-Z0-9._%+-]+)@([A-Z0-9-]+\.)+[A-Z]{2,}$/i,
                                            message: "Введите корректный email (латинские буквы, цифры, символы @._%+-)"
                                        }
                                    })}
                                    className={`block w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-purple-500 pl-10`}
                                    placeholder="your@email.com"
                                    autoComplete="email"
                                    disabled={isSubmitting}
                                />
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                    <FiMail size={20} />
                                </span>
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600 font-medium">{errors.email.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || !isDirty || !isValid}
                            className={`w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-md transition
                                ${(isSubmitting || !isDirty || !isValid) ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                        >
                            {isSubmitting ? 'Отправка...' : 'Отправить ссылку'}
                        </button>
                    </>
                )}

                <div className="mt-6 text-center space-y-3">
                    {isEmailSent ? (
                        <button
                            type="button"
                            onClick={() => navigate('/login')}
                            className="text-sm text-purple-600 font-medium hover:underline"
                        >
                            Вернуться на страницу входа
                        </button>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-sm text-purple-600 font-medium hover:underline block"
                            >
                                Вернуться ко входу
                            </Link>
                            <p className="text-sm text-gray-600">
                                Нет аккаунта? {' '}
                                <Link
                                    to="/register"
                                    className="text-purple-600 font-medium hover:underline"
                                >
                                    Зарегистрироваться
                                </Link>
                            </p>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;