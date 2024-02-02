import { useState } from 'react'
import words from "./wordList.json";
import './App.css'

function App() {
  const [wordToGuess, setWordGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)
  return <h1>Hi</h1>
}

export default App
