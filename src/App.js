import React from 'react';
import './App.css';
import { FaCopy } from 'react-icons/fa';

function App() {
  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+12099894454');
    alert('Phone number copied!');
  };

  const handleCall = () => {
    window.location.href = 'tel:+12099894454';
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/TOINGG.png" alt="Company Logo" className="logo" />
      </header>
      <main className="main-content">
        <h1 className="main-heading animate-text">Still hiring humans</h1>
        <p className="sub-heading">Why not AI?</p>
        <div className="contact-box">
          <a href="tel:+12099894454" className="phone-number" onClick={handleCall}>+1 209 989 4454</a>
          <button onClick={copyPhoneNumber} className="copy-button" aria-label="Copy Phone Number">
            <FaCopy />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
