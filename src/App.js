import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentWord, setCurrentWord] = useState("Click to Start");
  const [currentIndex, setCurrentIndex] = useState(0);

  const title = process.env.REACT_APP_TITLE
    ? process.env.REACT_APP_TITLE
    : "Super Power Words";

  function getRandomWord() {
    const words = process.env.REACT_APP_WORDS.split(", ");
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * words.length);
    } while (randomIndex === currentIndex);
    setCurrentIndex(randomIndex);
    return words[randomIndex];
  }

  function handleClick() {
    const randomWord = getRandomWord();
    setCurrentWord(randomWord);
  }

  return (
    <div className="Body">
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      <body className="App-body" onClick={handleClick}>
        <p>{currentWord}</p>
      </body>
    </div>
  );
}

export default App;
