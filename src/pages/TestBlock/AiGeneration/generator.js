import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: apiKey });

export async function generateQuetions({numberOfQuetions, profession, level}) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `Сгенерируй открытые вопросы для собеседования на позицию ${profession} уровня ${level}. 
                    Количество вопросов ${numberOfQuetions}. 
                    Каждый вопрос должен иметь конкретный технический фокус и предполагать развёрнутый, но конечный ответ.  
                    Избегай вопросов о личном опыте, проектах или мнениях.  
                    Используй не более 35 слов на вопрос.  

                    Ответ верни строго в виде **JSON-массива строк без пояснений и форматирования**.

                    Пример вывода:
                    [
                        "Что происходит при вызове функции useEffect без зависимостей в React?",
                        "Как работает всплытие событий (event bubbling) в JavaScript и как его остановить?",
                        "Чем отличаются классы и функциональные компоненты в React?"
                    ]`,
    });

    let text = response.text;
    text = text.trim();
    if (text.startsWith("```json")) {
        text = text.replace(/^```json/, "").replace(/```$/, "").trim();
    }

    console.log(text)

    try {
        const quetions = JSON.parse(text);
        return quetions;
    } catch (error) {
        console.log(error);
        return
    }
}

export async function generateFeedback(userAnswer) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `Проанализируй ответ кандидата по следующим критериям:

                    1. Напиши список достоинств (advantages) — что выполнено хорошо.
                    2. Напиши список недостатков (disadvantages) — чего не хватает или сделано слабо.
                    3. Оцени ответ по 10-балльной шкале (score).
                    4. Дай краткий комментарий (comments) с улучшениями — как ты бы сам дополнил ответ, объясняя идеи простыми словами. Общий объём комментария — не более 80 слов.

                    Ответ кандидата: ${userAnswer}
                    Ответ верни строго в формате **одного JSON-объекта**.  
                    Никаких пояснений, markdown или форматирования.

                    Пример:
                    {
                    "advantages": [
                        "Хорошее понимание основных методов адаптивной вёрстки.",
                        "Упомянуты актуальные инструменты, как clamp() и Bootstrap."
                    ],
                    "disadvantages": [
                        "Недостаточно углублённое объяснение каждого метода",
                        "Отсутствует упоминание мобильного подхода (mobile-first)"
                    ],
                    "score": 8,
                    "comments": "Важно было бы добавить про mobile-first подход, так как он упрощает разработку, начиная с меньшего экрана и постепенно добавляя стили. Это также улучшает производительность на мобильных устройствах. Также следует упомянуть настройку viewport для корректного отображения."
                    }
                    `,
    });

    let text = response.text;
    text = text.trim();
    if (text.startsWith("```json")) {
        text = text.replace(/^```json/, "").replace(/```$/, "").trim();
    }

    try {
        const results = JSON.parse(text);
        return results;
    } catch (error) {
        console.log(error);
        return
    }
}