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
    <div className="Body">
      <header className="App-header">
        <h1>Henry's Super Power Words</h1>
      </header>
      <body className="App-body" onClick={handleClick}>
        <p>{currentWord}</p>
      </body>
    </div>
  );
}

export default App;
