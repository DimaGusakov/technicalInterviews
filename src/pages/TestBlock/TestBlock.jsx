import React from 'react';
import { useState, useEffect, useRef } from "react";
import { generateQuetions, generateFeedback } from './AiGeneration/generator';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setQuestions, addFeedback } from '@/store/slices/resultSlice';
import { useSelector } from 'react-redux';

export default function TestBlock() {
  const [quetions, setQuetions] = useState([]);
  const { items: profession, experience, questionsCount } = useSelector((state) => state.testData);

  const [currentQuetion, setCurrentQuetion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    
    const fetchQuestions = async () => {
      setIsLoading(true);
      try {
        console.log(profession, experience, questionsCount)
        const response = await generateQuetions(profession, experience, questionsCount);
        setQuetions(response);
        dispatch(setQuestions(response));
      } catch (error) {
        console.error(error);
        setError("Не удалось загрузить вопросы. Пожалуйста, попробуйте позже.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const nextQuetion = async () => {
    // Validate answer
    if (!answer.trim()) {
      setError("Пожалуйста, напишите ответ перед продолжением");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const feedback = await generateFeedback(answer);
      dispatch(addFeedback(feedback));

      if (questionsCount - 1 === currentQuetion) {
        navigate("../results");
      } else {
        setCurrentQuetion(prev => prev + 1);
        setAnswer("");
      }
    } catch (error) {
      console.error(error);
      setError("Произошла ошибка при обработке вашего ответа");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle case when questions haven't loaded yet
  if (isLoading && currentQuetion === 0) {
    return (
      <div className='p-[16px] m-10 bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-[0px_4px_10px_0px_rgba(106,99,118,0.1)]'>
        <p>Загрузка вопросов...</p>
      </div>
    );
  }

  // Handle error state
  if (error && !quetions.length) {
    return (
      <div className='p-[16px] m-10 bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-[0px_4px_10px_0px_rgba(106,99,118,0.1)]'>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Handle case when there are no questions
  if (!quetions.length) {
    return (
      <div className='p-[16px] m-10 bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-[0px_4px_10px_0px_rgba(106,99,118,0.1)]'>
        <p>Нет доступных вопросов</p>
      </div>
    );
  }

  return (
    <div className='p-[16px] m-10 bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-[0px_4px_10px_0px_rgba(106,99,118,0.1)]'>
      <div>
        <p className='my-2 text-[#757575] text-sm font-medium leading-[120%]'>
          Вопрос {currentQuetion + 1} из {questionsCount}
        </p>
        <h1 className='text-black font-manrope text-[18px] font-semibold leading-[120%]'>
          {quetions[currentQuetion]}
        </h1>
      </div>
      
      <div className='my-4'>
        <textarea 
          className='mb-2 w-full h-40 p-4 border border-gray-300 rounded-2xl bg-white text-gray-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none overflow-auto scrollbar-hide placeholder-gray-400' 
          name="answer" 
          id="answer" 
          value={answer} 
          placeholder='Напишите свой развёрнутый ответ'
          onChange={(e) => {
            setAnswer(e.target.value);
            setError(""); // Clear error when user starts typing
          }}
        />
        
        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}
        
        <Button 
          onClick={nextQuetion}
          disabled={isLoading}
        >
          {isLoading ? "Обработка..." : 
           (questionsCount - 1 !== currentQuetion ? "Далее" : "Завершить")}
        </Button>
      </div>
    </div>
  );
}