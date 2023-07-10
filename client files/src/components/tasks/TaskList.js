import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import axios from 'axios'

const TaskList = (props) => {
  const [taskList, setTaskList] = useState("")
  // const [taskData, setTaskData] = useState("")

  useEffect(() =>{
    const get_tasks = async () =>{
      const config = {
        method: 'post',
        url: `http://localhost:1000/api/task/get-all-tasks`,
        data : {"date" :props.req_date}
        // data : {"date" :localStorage.getItem('required_date')}
      }
      await axios(config)
        .then((response) => {
          setTaskList(response.data)
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }

    get_tasks()
  },[props.TaskDataValue])

  if(taskList != ""){
    return (
      <div>
        {taskList.data.map(task => (
          <TaskItem 
            key={task.id}
            id={task.id}
            onDelete={props.deleteTask}
            add={props.newTask}
            data={task.task}
            fetch = {props.setTaskDataFunc}
          >
            {task.task}
          </TaskItem>
        ))}
      </div>
    )
  }else{
    return(
      <div>No Tasks</div>
    )
  }
}

export default TaskList
