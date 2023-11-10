import React, { useState } from "react";
import "./App.css";

import wordsData from "./data/words.json";

function App() {
  const [currentWord, setCurrentWord] = useState("Click to Start");
  const [currentIndex, setCurrentIndex] = useState(0);

  const title = process.env.REACT_APP_TITLE
    ? process.env.REACT_APP_TITLE
    : "Super Power Words";

  console.log(process.env.REACT_APP_WORDS);

  function getRandomWord() {
    // const words = wordsData.words; // Access the array of words from the imported JSON
    const words = process.env.REACT_APP_WORDS.split(", ");
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * words.length);
    } while (randomIndex === currentIndex);
    setCurrentIndex(randomIndex); // Update the current index to the randomly selected index
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
