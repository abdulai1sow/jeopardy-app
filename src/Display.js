import React from 'react'

const Display = ({ question, isHidden, setIsHidden }) => {
  return (
    <div className='display'>
      <h3>
        Display Questions
      </h3>

      <div className='question'>

          <span>Question:</span>
          <h4> {question == null ? '' : question[0].question}</h4>

          <span>Category:</span>
          <h4>  {question == null ? '' : question[0].category.title}</h4>
        
        <span>Points:</span>
        <h4> {question == null ? '' : question[0].value}</h4>
          
      </div>

      {/* <div className='answer'>
        <h4 > Answer: {isHidden ? question[0].answer  : null }</h4>
      </div> */}
    </div>
  )
}

export default Display