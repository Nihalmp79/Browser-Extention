import React, { Fragment, useEffect } from 'react'

import "./Task.css"
import { useBrowser } from '../../context/browser-context'

const Task = () => {  

  const {name, time, message, browserDispatch} = useBrowser();

  useEffect(() =>{
    getCurrentTime();
  },[time]);

  const getCurrentTime = () => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    const hour = hours < 10 ? `0${hours}` : hours;
    const minute = minutes < 10 ? `0${minutes}` : minutes;

    const currentTime = `${hour} : ${minute}`
    setTimeout(getCurrentTime, 1000);

    browserDispatch({
      type: "TIME",
      payload: currentTime
    })

    browserDispatch({
      type:"MESSAGE",
      payload: hours
    })
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();

  }

  const handleTaskChange = (event) => {
    if(event.key === "Enter" && event.target.value.length > 0){
      browserDispatch({
      type: "TASK",
      payload: event.target.value
    });
     localStorage.setItem("task", event.target.value);
     localStorage.setItem("date", new Date.getDate());
    }
  }


  return (
    <div className='task-container d-flex direction-column align-center'>
      <span className='time'>{time}</span>
      <span className='message'>{message}, {name}</span>
      <Fragment>
        <span className='focus-question'>What is your main focus for today?</span>
        <form onSubmit={handleFormSubmit}>
          <input required className='input task-input' onKeyPress={handleTaskChange}/>
        </form>
      </Fragment>
      <div className='user-task-container'>
        <span className='heading-2'>Today's Focus</span>
        <div>
          <input id="checkbox" type='checkbox'/>
          <label for="checkbox"></label>
        </div>
      </div>
    </div>
  )
}

export default Task
