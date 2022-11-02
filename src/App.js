import { useState, useEffect } from 'react'
import Display from './Display'
import './App.css'

function App() {
  

  const [question, setQuestion] = useState(null)
  const [questions, setQuestions] = useState(null)
  const [isHidden, setIsHidden] = useState(null)
  const [points, setPoints] = useState(0)

  
  const getRandom = async () => {
    try {
      const res = await fetch('http://jservice.io/api/random')
      const data = await res.json()
      setQuestion(data)
      console.log(data);
      setIsHidden(false)
      // showAnswer()
    } catch (err) {
      console.log(err);
    }
  }

  const showAnswer = () => {
    setIsHidden(!isHidden)
  }

  const addScore = () => {
    setPoints(points + question[0].value) 
  }

  const reduceScore = () => {
    setPoints(points - question[0].value)
  }

  return (

    <div className="App">

      <div className='points'>
        <h2>Score: {points}</h2>

        <button onClick={addScore} className='button add'> Add score</button>
        <button onClick={reduceScore} className='button reduce'>Reduce</button>
      </div>

      <button onClick={getRandom} className='button random'>
        Random Quest
      </button>
      {question && < Display question={question} />}

      <button  onClick={showAnswer} className='button show'>
        Show Answer
      </button>
      {isHidden ? question[0].answer : null}

      

    </div>
  );
}

export default App;
