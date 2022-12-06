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
      const res = await fetch('https://jservice.io/api/random')
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
      <h1> Lets play Jeopardy 🤓</h1>
      <div className='points'>
        <h2>Score: {points}</h2>
        <div className='assReduceBtn'>
          <button onClick={addScore} className='button add'> <AiOutlineArrowUp style={{ color: '#fff', fontSize: '30px', float: 'left' }} />
            <p>
              ADD
            </p>
          </button>

          <button onClick={reduceScore} className='button reduce'>
            <AiOutlineArrowDown style={{ color: '#fff', fontSize: '30px', float: 'right' }} />
            <p>
              REDUCE
            </p>
          </button>
        </div>
      </div>

      <button onClick={getRandom} className='button random'>
        RANDOM QUEST
      </button>
      {question && < Display question={question} />}

      <button onClick={showAnswer} className='button show'>
        SHOW ANSWER
      </button>
      
      <div className='showAnswer'>
        {isHidden ? question[0].answer : null}

      </div>



    </div>
  );
}

export default App;
