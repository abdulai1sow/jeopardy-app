import {useState, useEffect} from 'react'

function App() {

  const [question, setQuestion] = useState(null)

  const getRandom = async () => {
    try {
      const res = await fetch(' http://jservice.io/api/random')
      const data = await res.json()
      setQuestion(data)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="App">
      <button onClick={getRandom}>
        Random Quest
      </button>

      <div>
        {}
      </div>
    </div>
  );
}

export default App;
