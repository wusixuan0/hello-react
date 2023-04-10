import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const Button = (props) => {
  // your code here
};
function App() {
  const reset = () => {
    console.log("reset");
    setName("");
  };

  const [name, setName] = useState("");

  return (
    <div className="App">
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your name"></input>
      <button onClick={reset}>Reset</button>
      
      {name && <h1>Hello {name}</h1>}
      
    </div>
  );
}

export default App;


