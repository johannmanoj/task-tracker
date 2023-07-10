import React, { useState , useEffect} from 'react'
import './BackgroundCard.css'
import SideBar from './SideBar'
import MainPage from './MainPage'

const BackgroundCard = () => {
  var today = new Date()
  var curr_date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

  const [pageDate, setPageDate] = useState(curr_date)
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState("")

  useEffect(() => {
    localStorage.setItem('required_date', pageDate);
  }, [pageDate]);

  const addTaskHandler = enteredText => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  const deleteItemHandler = taskId => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskId);
      return updatedTasks;
    });
  };


  return (
    <div className='background-card'>
      <div className='background-card-layout'>
        <SideBar />
        <MainPage 
          setTaskDataFunc = {setTaskData}
          TaskDataValue = {taskData}

          req_date = {pageDate}
          deleteTask = {deleteItemHandler}
          newTask = {addTaskHandler}
        />
      </div>  
      
    </div>
  )
}

export default BackgroundCard
