import { useState } from "react";
import words from "./wordList.json";
import "./App.css";

function App() {
  const [wordToGuess, setWordGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);

  return(
  <div
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
    }}
  >
    <div>
      Lose
      Win
    </div>
    </div>
  )
}

export default App;
