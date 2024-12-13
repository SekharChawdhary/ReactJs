import React, { useState } from 'react';
/// import { Link } from 'react-router-dom';

function Counter() {
  const [state, setState] = useState(0);
  
  const increment = () => {
    setState(state < 10 ? state + 1 : state);
  };

  const decrement = () => {
    setState(state > 0 ? state - 1 : state);
  };

  const [message, setMessage] = useState("hello");

  const changeMessage = () => {
    setMessage("how are you");
  };

  return (
    <div> 
      <div>
        <p>{state}</p> 
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <div>
        <p>{message}</p>
        <button onClick={changeMessage} >click</button>
        {/* <Link>Go to Another Page</Link> */}
        <a href='http://183.82.106.55:9093/'> click</a>
      </div>
    </div>
  );
}

export default Counter;
