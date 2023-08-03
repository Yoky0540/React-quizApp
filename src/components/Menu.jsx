import React, { useContext } from 'react'
import { DataContext } from '../App'

const Menu = () => {
    const {setAppState} = useContext(DataContext)

    return (
        <div className='menu'>
            <h3>Pretest Quiz</h3>
            <button onClick={()=>setAppState('quiz')}>Start</button>
        </div>
    )
}

export default Menu