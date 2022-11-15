import { useState, useEffect } from 'react'
import Display from './Display'
import './App.css'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
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
        <div>
          <button onClick={addScore} className='button add'> <AiOutlineArrowUp style={{ color: '#fff', fontSize: '30px', position:'relative' }} />  Add score</button>

          <button onClick={reduceScore} className='button reduce'>
            <AiOutlineArrowDown style={{ color: '#fff', fontSize: '30px' }} /> Reduce</button>
        </div>
      </div>

      <button onClick={getRandom} className='button random'>
        Random Quest
      </button>
      {question && < Display question={question} />}

      <button onClick={showAnswer} className='button show'>
        Show Answer
      </button>
      {isHidden ? question[0].answer : null}



    </div>
  );
}

export default App;
