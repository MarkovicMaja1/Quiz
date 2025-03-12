import React, { useRef } from 'react'

const Answers = ({answers, selectedAnswer, answerState, onSelect}) => {
    const shuffeledAnswers = useRef();

    if(!shuffeledAnswers.current){
        shuffeledAnswers.current = [...answers]
        shuffeledAnswers.current.sort(() => Math.random() - 0.5 )
    }

  return (
    <ul id="answers">
                    {shuffeledAnswers.current.map((answer)=>{
                        const isSelected = selectedAnswer === answer;
                        let cssClass= '';

                        if (answerState === 'answered'&& isSelected ) {
                            cssClass = 'selected';
                        }

                        if ((answerState ==='correct' || answerState === 'wrong') && isSelected){
                            cssClass = answerState;
                        }
                
                        return (
                
                        <li key={answer} className='answer'>
                            <button onClick={() => onSelect(answer )}
                                className={cssClass}>{answer}</button>
                        </li> 
                        );
})};
                </ul> 
  )
}

export default Answers
