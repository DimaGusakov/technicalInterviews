import React from 'react'
import { useSelector } from 'react-redux';
import CircleScore from '@/components/CircleScore/CircleScore';

export default function Results() {
  const questions = useSelector(state => state.results.questions);
  const feedbacks = useSelector(state => state.results.feedbacks);

  const averageScore = feedbacks.length > 0 ? (feedbacks.reduce((sum, item) => sum + (item.score || 0), 0) / feedbacks.length).toFixed(2) : 0; //avarage score

  return (
    <div className='m-5'>
      <h1 className='text-black font-manrope text-[clamp(20px,2vw,40px))] mb-8 font-semibold leading-[120%]'>Результаты тестирования</h1>
      <div className='flex items-start gap-x-10'>
        <div>
          {questions.map((question, i) => (
            <div key={i} className="mb-4 p-4 border rounded-xl">
              <h2 className="font-semibold text-2xl mb-2">Вопрос {i + 1}: {question}</h2>
              <p><strong>Оценка:</strong> {feedbacks[i]?.score}</p>
              <p><strong>Плюсы:</strong> {feedbacks[i]?.advantages.join(" ")}</p>
              <p><strong>Минусы:</strong> {feedbacks[i]?.disadvantages.join(" ")}</p>
              <p><strong>Комментарии:</strong> {feedbacks[i]?.comments}</p>
            </div>
          ))}
        </div>

        <CircleScore score={averageScore} />
      </div>
    </div>
  );

}
