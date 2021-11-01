import React, { useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const [firstName, setFirstName] = useState("Elon");
  const [lastName, setLastName] = useState("Musk");
  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = () => {
    if(!firstName || !lastName){
      return false;
    }
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  }

  return (
    <div className="app">
      <h1>The Joke Generator</h1>
      <q>{joke}</q>
      <form className="form">
        <input placeholder="First Name" ref={firstNameRef}/>
        <input placeholder="Last Name" ref={lastNameRef}/>
      </form>
      <button className="button" onClick={generateJoke}>Generate Joke</button>
    </div>
  );
}

export default App;
