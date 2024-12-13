// src/TodoApp.js

import React, { useState } from 'react';

const TodoApp = () => {
const [time, setTime]=useState(0);
useState(()=>{
  const interval=setInterval(()=>{
    setTime(time+1)
  },1000)
},[time])
  return (
    <div>
 time: {time}
    </div>
  );
};

export default TodoApp;
