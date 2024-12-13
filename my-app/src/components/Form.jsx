import React, { useState } from 'react'

const Form = () => {
    const [username,setUsername]=useState("");
    
    const handleChangeUsername=(e)=>{
        setUsername (e.target.value);
    }
    const [courses,setCourses]=useState("");
    const handleChangeCourses=(e)=>{
        setCourses(e.target.value);
    }
    const [comments,setComments]=useState("");
    const handleChangeComments=(e)=>{
        setComments(e.target.value);
    }
    const handleReset=()=>{
        setUsername(" ");
        setCourses(" ");
        setComments(" ");
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Welocme! "+username);
    }
  return (
    <div>
      <form action="">
        <div className='userName'>
        <label htmlFor="">User Name</label>
        <input type="text" value={username} onChange={handleChangeUsername} />
        </div>
        <div className='courses'>
        <label>Courses</label>
        <select value={courses} onChange={handleChangeCourses}>
            <option>None</option>
            <option>Java</option>
            <option>React</option>
            <option>.Net</option>
            <option>Mern Stack</option>
        </select>
        </div>
        <div className=''>
    <label>Comments</label>
       <textarea name="" id="" value={comments} onChange={handleChangeComments}>

       </textarea>
       </div>
       <div className='buttons'>
       <button type='reset'onClick={handleReset} >Reset</button>
       <button type='submit' onClick={handleSubmit}>Submit</button>
       </div>
      </form>
    </div>
  )
}

export default Form
