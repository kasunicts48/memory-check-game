import './App.css';
import React, { useState } from 'react'

const cardImages = [
  {"src": "/img/hero1.png"},
  {"src": "/img/hero2.png"},
  {"src": "/img/hero3.png"},
  {"src": "/img/hero4.png"},
  {"src": "/img/hero5.png"},
  {"src": "/img/hero6.png"}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // suffle cards
  const suffleCards = ()=> {
    const suffledCards = [...cardImages,...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id : Math.random()}))

    setCards(suffledCards);
    setTurns(0)
  }

  console.log(cards, turns);

  return ( 
    <div className="App">
      <h1>Memory Hero</h1>
      <button onClick={suffleCards}>New Game</button>
    </div>
  );
}

export default App;
