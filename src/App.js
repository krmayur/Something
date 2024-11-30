import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  // Custom messages for each petal
  const petalMessages = [
    'You are amazing!',
    'You light up my life!',
    'My heart blooms for you!',
    'You make everything beautiful!',
    'Hello, Bohot jaldi jaldi me banaya hai',
  ];

  const handleHover = (index) => {
    setMessage(petalMessages[index]);
  };

  return (
    <div className="App">
      <h1>Flower for You 🌸</h1>
      <div className="flower-container">
        <div className="flower">
          <div className="petal top" onMouseEnter={() => handleHover(0)}></div>
          <div className="petal right" onMouseEnter={() => handleHover(1)}></div>
          <div className="petal bottom" onMouseEnter={() => handleHover(2)}></div>
          <div className="petal left" onMouseEnter={() => handleHover(3)}></div>
          <div className="petal center" onMouseEnter={() => handleHover(4)}></div>
          <div className="stem"></div>
        </div>
      </div>
      <p className="message">{message}</p>
    </div>
  );
}

export default App;
