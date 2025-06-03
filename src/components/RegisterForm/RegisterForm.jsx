import React from 'react';
import { FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router';

const RegisterForm = () => {
    return (
        <div className="flex-1 flex items-center justify-center py-16 px-6 md:px-12">
            <form className="w-full max-w-md">
                <h2 className="text-3xl font-bold mb-8">Р Е Г И С Т Р А Ц И Я</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Введите имя..."
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Введите номер телефона..."
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Введите электронную почту..."
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />

                <div className="relative mb-4">
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Введите пароль..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center text-gray-500 cursor-pointer">
                        <FiEyeOff size={20} />
                    </span>
                </div>

                <div className="relative mb-4">
                    <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="Повторите пароль..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center text-gray-500 cursor-pointer">
                        <FiEyeOff size={20} />
                    </span>
                </div>

                <label className="flex items-center mb-6 text-sm text-gray-700">
                    <input
                        type="checkbox"
                        name="agree"
                        className="mr-2"
                        required
                    />
                    Я согласен на обработку персональных данных
                </label>

                <button
                    type="submit"
                    className="w-full py-3 mb-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full hover:opacity-90 transition"
                >
                    Зарегистрироваться
                </button>

                <Link
                    to="/login"
                    className="w-full flex items-center justify-center py-3 bg-gray-200 rounded-full mt-4 hover:bg-gray-300 transition no-underline"
                >
                    <span className="text-sm text-gray-700 mr-2">Уже есть аккаунт?</span>
                    <span className="text-sm font-medium text-purple-700">Войти</span>
                </Link>
            </form>
        </div>
    );
};

export default RegisterForm;
