import React, { useState } from 'react'
import './TaskItem.css'
import { HiOutlineTrash } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import EditPopup from '../mainPage/EditPopup';
import axios from 'axios'

const TaskItem = (props) => {
    const [check, setCheck] = useState(false)
    const [model, setModel] = useState(false)

    const onEditHandler = () =>{
        setModel(!model)
    }

    const checkHandler = () =>{
        // props.onDelete(props.id)
        // props.add(props.data)
        setCheck(!check)
    }
    
    const deleteHandler = async () => {
        const config = {
            method: 'post',
            url: `http://localhost:1000/api/task/delete-task`,
            data: {
              "task_id" : props.id
            }
          }
      
          await axios(config)
            .then((response) => {
              console.log(response.data)
            })
            .catch((error) => {
              console.log(error.response.data);
            });
        props.fetch(Math.random(10000))
    };

    var req_task 
    if (check){
        req_task = <div className='text-strike' >{props.children}</div>
    }else{
        req_task = <div className='text' >{props.children}</div>
    }


    return (
        <div>
            {model && <EditPopup onEditHandler = {onEditHandler} text={props.data} id = {props.id} fetch = {props.fetch}/>}
            <div className='task-item'>
                <div className='space'><input className='checkbox-round' type="checkbox" onClick={checkHandler}/></div>
                
                <div className='task'>
                    <div className='task-text'>{req_task}</div>
                </div>
                <div className='space'>{!check && <MdEdit className='edit' onClick={onEditHandler}/>}</div>
                <div className='space'><HiOutlineTrash className='delete' onClick={deleteHandler}/></div>
            </div>
        </div>
    )
}

export default TaskItem
