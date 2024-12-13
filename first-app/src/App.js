import React, { useState } from 'react';
import './App.css';
import SignUp from './components/signUp/SignUp';
import Regester from './components/signUp/Regester';
import Api from './components/Api';
import TodoApp from './components/TodoApp';
import Effect from './components/Effect';
import Login from './components/Login';

function App() {
  const [data, setData]=useState();
  return (
    
    <div className="App">
      {/* Uncomment the component you want to render */}
      {/* <SignUp /> */}
      {/* <Regester /> */}
      {/* <TodoApp /> */}
      {/* <Api /> */}
      {/* <Effect name="Sekhar" age="18"/> */}
      <Login />
    </div>
  );
}

export default App;
