import React from 'react'
import { useState, useEffect, useRef } from "react";
import { generateQuetions, generateFeedback } from './AiGeneration/generator';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setQuestions, addFeedback } from '@/store/slices/resultSlice';

export default function TestBlock(props) {
  const [quetions, setQuetions] = useState([]);  // array of q
  const [testUserInfo, setTestUserInfo] = useState({ // user data
    numberOfQuetions: 3,
    profession: "Фронтенд-разработчик",
    level: "Junior"
  })
  const [currentQuetion, setCurrentQuetion] = useState(0); //number of q
  const [answer, setAnswer] = useState("")

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hasFetched = useRef(false); // tracks if q we already fetched

  useEffect(() => {
    if (hasFetched.current) return; // block second StrictMode run
    hasFetched.current = true;
    (async() => {
      try {
        const response = await generateQuetions(testUserInfo);
        setQuetions(response) //q generated
        dispatch(setQuestions(response));
      } catch (error) {
        console.error(error);
      }
    })()
  },[])

  const nextQuetion = async () => {
    try {
      const feedback = await generateFeedback(answer);
      dispatch(addFeedback(feedback));

      if (testUserInfo.numberOfQuetions - 1 === currentQuetion){
        navigate("../results")
      };
      setCurrentQuetion(prev =>  prev + 1);
      setAnswer("")

    } catch (error) {
      console.error(error)
    }

  }

  return (
    <div className='p-[16px] m-10 bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-[0px_4px_10px_0px_rgba(106,99,118,0.1)]'>
        <div>
            <p className='my-2 text-[#757575] text-sm font-medium leading-[120%]'>Вопрос {currentQuetion + 1} из {testUserInfo.numberOfQuetions}</p>
            <h1 className='text-black font-manrope text-[18px] font-semibold leading-[120%]'>{quetions[currentQuetion]}</h1>
        </div>
        <div className='my-4'>
            <textarea className='mb-2 w-full h-40 p-4 border border-gray-300 rounded-2xl bg-white text-gray-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none overflow-auto scrollbar-hide placeholder-gray-400' 
                      name="answer" 
                      id="answer" 
                      value={answer} 
                      placeholder='Напишите свой развёрнутый ответ'
                      onChange={(e) => setAnswer(e.target.value)}></textarea>
            <Button onClick={nextQuetion}>{testUserInfo.numberOfQuetions - 1 !== currentQuetion ? "Далее" : "Завершить"}</Button>
        </div>
    </div>
  )
}
