import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [quote, setQuote] = useState('')
  const quoteGenerator = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((res)=> setQuote(res.data.slip.advice))
    .catch((err)=>{throw err})
  }
  useEffect(()=>{
    quoteGenerator()
  }
  ,[])

  return (
    <div className="app">
        <div className="card">
          <h1 className="heading">{quote}</h1>
          <button className="button" onClick={quoteGenerator}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
  )
}

export default App
