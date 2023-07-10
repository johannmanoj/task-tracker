import React from 'react'
import './MainPage.css'
import Header from './Header'
import TaskList from '../tasks/TaskList'

const MainPage = (props) => {
  return (
    <div className='mainpage-background' style={{backgroundImage: `url(${props.currWallpaper})`}}>
      <Header 
        req_date ={props.req_date}
      />
      <TaskList 
        setTaskDataFunc = {props.setTaskDataFunc}
        TaskDataValue = {props.TaskDataValue}
        req_date = {props.req_date}
        deleteTask = {props.deleteTask}
        newTask = {props.newTask}
      />
    </div>
  )
}

export default MainPage
