import React, { useContext, useEffect, useState } from 'react'
import QuestionData from "../data/QuestionData"
import { DataContext } from '../App'

const Quiz = () => {

    const [currentQuiz,setCurrentQuiz] = useState(0)
    const [selectChoice,setSelectChoice] = useState('')
    
    const {score,setScore} = useContext(DataContext)
    const {setAppState} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()  
    },[selectChoice])

    const checkAnswer = () =>{
        if(selectChoice!=""){
            if(selectChoice == QuestionData[currentQuiz].answer){
                console.log("Correct")
                setScore(score+1)
            }else{
                console.log("Incorrect")
            }
            nextQuestion() 
        }
    }

    const nextQuestion = () =>{
        setSelectChoice('')
        if(currentQuiz === QuestionData.length-1){
            setAppState('score')
        }else{
            setCurrentQuiz(currentQuiz+1)
        }
    }

  return (
    <div className='quiz'>
        <h3>{QuestionData[currentQuiz].question}</h3>
        <div className="choices">
            <button onClick={()=>setSelectChoice('A')}>{QuestionData[currentQuiz].A}</button>
            <button onClick={()=>setSelectChoice('B')}>{QuestionData[currentQuiz].B}</button>
            <button onClick={()=>setSelectChoice('C')}>{QuestionData[currentQuiz].C}</button>
            <button onClick={()=>setSelectChoice('D')}>{QuestionData[currentQuiz].D}</button>
        </div>
        <p>{`${currentQuiz+1}/${QuestionData.length}`}</p>
    </div>
  )
}

export default Quiz
