import React, { useState, useEffect } from 'react'

const QuestionTimer = ({timeout, onTimeout, mode}) => {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
       const timer = setTimeout(onTimeout, timeout) 
       console.log('time1r')
        return () => {
            clearInterval(timer)
        }
       
    },[timeout,onTimeout])

    useEffect(() => {
      const interval =  setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 110);
        },100);
        console.log('time2r')

        return () => {
            clearInterval(interval)
        }
    }, [])


  return (
    <progress id='question-time' max={timeout} value={remainingTime} className={mode}/>

    
  )
}

export default QuestionTimer
