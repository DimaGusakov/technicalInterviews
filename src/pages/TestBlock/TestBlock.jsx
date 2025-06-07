import React from 'react'
import { useState, useEffect, useRef } from "react";
import { generateQuetions, generateFeedback } from './AiGeneration/generator';

export default function TestBlock(props) {
  const [quetions, setQuetions] = useState([]);  // array of q
  const [testUserInfo, setTestUserInfo] = useState({ // user data
    numberOfQuetions: 1,
    profession: "Фронтенд-разработчик",
    level: "Junior"
  })
  const [currentQuetion, setCurrentQuetion] = useState(0); //number of q
  const [answer, setAnswer] = useState("")

  const [results, setResults] = useState([]);

  const hasFetched = useRef(false); // tracks if q we already fetched

  useEffect(() => {
    if (hasFetched.current) return; // block second StrictMode run
    hasFetched.current = true;
    (async() => {
      try {
        const response = await generateQuetions(testUserInfo);
        setQuetions(response) //q generated
      } catch (error) {
        console.error(error);
      }
    })()
  },[])

  const nextQuetion = async () => {
    try {
      const feedback = await generateFeedback(answer);
      setResults(prev => prev.push(feedback));

      if (testUserInfo.numberOfQuetions - 1 !== currentQuetion) setCurrentQuetion(prev =>  prev + 1);
      else console.log(results);

    } catch (error) {
      console.error(error)
    }

  }

  return (
    <div className='wr-test'>
        <div>
            <h1>{quetions[currentQuetion]}</h1>
            <textarea name="answer" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
            <button onClick={nextQuetion}>Next</button>
        </div>
    </div>
  )
}
