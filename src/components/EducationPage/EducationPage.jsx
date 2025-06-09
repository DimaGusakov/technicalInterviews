import { useState } from 'react';

export default function EducationPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const randomQuestions = [
        "Что такое Virtual DOM и как он работает?",
        "В чем разница между let, const и var?",
        "Как работает замыкание в JavaScript?",
        "Что такое асинхронность в JS?",
        "Для чего нужны React Hooks?",
        "Что такое event loop в JavaScript?",
        "В чем разница между == и ===?",
        "Что такое состояние в React?",
        "Как работает this в JavaScript?",
        "Что такое REST API?"
    ];

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prev) => (prev + 1) % randomQuestions.length);
    };

    const progress = Math.floor((currentQuestionIndex + 1) / randomQuestions.length * 100);

    return (
        <div className="min-h-screen bg-gradient-to-br 0 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-black-900">ПОДГОТОВКА К СОБЕСЕДОВАНИЯМ</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-black-700 font-medium">СТАТИСТИКА СОБЕСЕДОВАНИЙ</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Block - Start Test */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <div className="text-sm text-purple-700 font-medium mb-4">
                            Вопрос викторины ID №{String(currentQuestionIndex + 1).padStart(2, '0')}45
                        </div>

                        <h2 className="text-xl font-bold text-black-900 mb-8">
                            {randomQuestions[currentQuestionIndex]}
                        </h2>

                        <div className="flex justify-center mb-8">
                            <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center">
                                <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <a
                                href="/"
                                className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-8 rounded-2xl transition-colors duration-200"
                            >
                                Начать тест
                            </a>
                        </div>
                    </div>

                    {/* Right Block - Progress & Stats */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <div className="flex justify-center mb-6">
                            <div className="relative w-40 h-40">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        stroke="#E1CEFF"
                                        strokeWidth="8"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        stroke="#6A0BFF"
                                        strokeWidth="8"
                                        fill="transparent"
                                        strokeDasharray={`${progress * 2.51} 251`}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-bold text-purple-700">{progress}%</span>
                                    <span className="text-sm text-black-600">пройдено</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mb-6">
                            <div className="text-center">
                                <div className="text-lg font-bold text-black-900">20</div>
                                <div className="text-xs text-black-600">Всего</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-black-900">100</div>
                                <div className="text-xs text-black-600">Новые</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-black-900">50</div>
                                <div className="text-xs text-black-600">В процессе</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-black-900">12</div>
                                <div className="text-xs text-black-600">Изучено</div>
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={handleNextQuestion}
                                className="text-purple-700 hover:text-purple-800 font-medium flex items-center gap-2 mx-auto"
                            >
                                Следующий вопрос
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}