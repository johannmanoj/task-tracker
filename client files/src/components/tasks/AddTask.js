import React, {useState} from 'react'
import './AddTask.css'
import { GrFormAdd } from "react-icons/gr";
import axios from 'axios'

const AddTask = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  function refreshPage() {
    window.location.reload(false);
  }

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const config = {
      method: 'post',
      url: `http://localhost:1000/api/task/add-task`,
      data: {
        "task" : enteredValue,
        "date" : props.req_date
      }
    }
    
    await axios(config)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    // props.newTask(enteredValue);
    setEnteredValue("")
    // refreshPage()
  };

  return (
    <div  className='background'>
      <input className='addTask-input' type="text" value={enteredValue} onChange={goalInputChangeHandler}></input>
      <div className='add-plus-background' onClick={formSubmitHandler}><GrFormAdd className='add-plus'/></div>
    </div>
  )
}

export default AddTask
