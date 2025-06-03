import React from 'react';
import { FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router';

const LoginForm = () => (
    <div className="flex-1 flex items-center justify-center py-16 px-6 md:px-12">
        <form className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-8">Вход в личный кабинет</h2>

            <div className="mb-6">
                <input
                    id="email"
                    type="email"
                    placeholder="Введите электронную почту..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            <div className="relative mb-2">
                <input
                    id="password"
                    type="password"
                    placeholder="Введите пароль..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
                    <FiEyeOff size={20} />
                </span>
            </div>

            <Link to="/forgot-password" className="block text-right text-sm text-purple-600 hover:underline mb-8">
                Забыли пароль?
            </Link>

            <button
                type="submit"
                className="w-full py-3 mb-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full hover:opacity-90 transition"
            >
                Вход
            </button>

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

export default LoginForm;
