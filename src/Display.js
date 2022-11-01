import React from 'react'

const Display = ({question, isHidden, setIsHidden}) => {
  return (
    <div> 
      Display Questions
      {/* {question.map(questions => (
    <div>
        <h4>{question.question}</h4>
        <h4>{question.category}</h4>
        <h4>{question.value}</h4>
        </div>
        
      ))} */}
      <h4 className='question'>question: {question == null ? '' : question[0].question}</h4>
      <h4> Category: {question == null ? '' : question[0].category.title}</h4>
      <h4>Points: {question == null ? '' : question[0].value}</h4>
      
      {/* <div className='answer'>
        <h4 > Answer: {isHidden ? question[0].answer  : null }</h4>
      </div> */}
    </div>
  )
}

export default Display