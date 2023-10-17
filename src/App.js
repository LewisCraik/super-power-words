import React, { useState } from "react";
import "./App.css";

const words = ["I", "No", "Go"];

function App() {
  const [currentWord, setCurrentWord] = useState("Click to Start");

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function handleClick() {
    const randomWord = getRandomWord();
    setCurrentWord(randomWord);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={handleClick}>{currentWord}</p>
      </header>
    </div>
  );
}

export default App;
