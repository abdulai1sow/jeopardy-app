import { useState, useEffect } from 'react'
import Display from './Display'

function App() {
  

  const [question, setQuestion] = useState(null)
  const [questions, setQuestions] = useState(null)
  const [isHidden, setIsHidden] = useState(null)
  const [points, setPoints] = useState(0)

  // useEffect(() => {
  //   // getRandom()
  // },[])
  const getRandom = async () => {
    try {
      const res = await fetch('http://jservice.io/api/random?count=10')
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

      <button onClick={getRandom}>
        Random Quest
      </button>
      {question && < Display question={question} />}

      <button onClick={showAnswer}>
        Show Answer
      </button>
      {isHidden ? question[0].answer : null}

      <div>
        <h2>Score: { points}</h2>
        
        <button onClick={addScore}> Add score</button>
        <button onClick={reduceScore}>Reduce</button>

      </div>

    </div>
  );
}

export default App;
