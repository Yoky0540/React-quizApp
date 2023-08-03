import React, { useContext } from 'react'
import { DataContext } from '../App'
import QuestionsData from '../data/QuestionData'

const Score = () => {

    const {score,setScore,setAppState} = useContext(DataContext)

    const restartApp = () =>{
        setScore(0)
        setAppState('menu')
    }

    return (
        <div className='score'>
            <h3>Summary Score</h3>
            <h4>{`${score}/${QuestionsData.length}`}</h4>
            <button onClick={()=>restartApp()}>Restart Test</button>
        </div>
    )
}

export default Score
