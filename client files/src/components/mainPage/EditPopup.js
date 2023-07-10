import React, { useEffect, useState } from 'react'
import './EditPopup.css'
import axios from "axios"

const EditPopup = (props) => {
  const [task, setTask] = useState("")
 
  const onChangeHandler = (event) =>{
    setTask(event.target.value)
  }

  const update_handler = async () =>{
    const config = {
      method: 'post',
      url: `http://localhost:1000/api/task/update-task`,
      data: {
        "task_id" : props.id ,
        "desc" : task
      }
    }

    await axios(config)
      .then((response) => {
        console.log(response.data)
        props.onEditHandler()
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    props.fetch(Math.random(10000))
  }

  return(
    <div>
      <div className='backdrop' onClick={props.onEditHandler}/>
      <div className='modal'>
        <header className='header'>
          <h3>Edit</h3>
        </header>
        {/* <div className='content'>
          {props.desc}
        </div> */}
        <input placeholder={props.text} onChange={onChangeHandler} className='edit-input'></input>
        <footer className='actions'>
          <button className='button' onClick = {update_handler} >Update</button>
          <button className='button' onClick={props.onEditHandler}>Close</button>
        </footer>
      </div>
    </div>
  )
}

export default EditPopup