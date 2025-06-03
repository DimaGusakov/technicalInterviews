import React from 'react';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router';

const ForgotPasswordForm = () => {
    return (
        <div className="flex-1 flex items-center justify-center py-16 px-6 md:px-12">
            <form className="w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6">Восстановление пароля</h2>
                <p className="text-gray-600 mb-8">
                    Для восстановления пароля введите адрес эл.почты, на который вы регистрировались. Мы отправим письмо для воссталовления пароля
                </p>

                <div className="relative mb-6">
                    <input
                        type="email"
                        placeholder="Введите электронную почту..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                        <FiMail size={20} />
                    </span>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full hover:opacity-90 transition"
                >
                    Отправить ссылку
                </button>

                <Link
                    to="/login"
                    className="block text-center text-sm text-purple-600 hover:underline mt-6"
                >
                    Вернуться ко входу
                </Link>
                <Link
                    to="/register"
                    className="w-full flex items-center justify-center py-3 bg-gray-200 rounded-full mt-4 hover:bg-gray-300 transition no-underline"
                >
                    <span className="text-sm text-gray-700 mr-2">Нет аккаунта?</span>
                    <span className="text-sm font-medium text-purple-700">Зарегистрироваться</span>
                </Link>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
