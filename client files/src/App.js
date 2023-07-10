import { useState , useEffect} from 'react';
import './App.css';
import SideBar from './components/sideBar/SideBar';
import MainPage from './components/mainPage/MainPage';

function  App () {
  const [wallpaper, setWallpaper] = useState("https://wallpapercave.com/wp/Jx3kwzS.jpg")
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
    <div className="app-card">
      <div className='app-card-layout'>
        <SideBar 
          changeWallpaper = {setWallpaper}
          setTaskDataFunc = {setTaskData}
          changeDate ={setPageDate}
        />
        <MainPage 
          TaskDataValue = {taskData}
          currWallpaper = {wallpaper}
          req_date = {pageDate}
          deleteTask = {deleteItemHandler}
          newTask = {addTaskHandler}
          setTaskDataFunc = {setTaskData}
        />
      </div>  
    </div>
  );
}

export default App;
