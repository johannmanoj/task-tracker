import React, { useState } from 'react'
import './SideBar.css'
import { CgProfile } from "react-icons/cg";
import ProfilePopup from './ProfilePopup';
import Date_mod from './Date'
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";  
import CalenderPopup from './CalenderPopup'

const SideBar = (props) => {
  const [show, setShow] = useState(false)
  const [showCalender, setShowCalender] = useState(false)
  var today = new Date()
  var curr_date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const [date, setDate] = useState(curr_date)

  const onClickCalenderHandler = () =>{
    setShowCalender(!showCalender)
  }

  // const onchangeHandler = (event) =>{
  //   setDate(event.target.value)
  //   setShowCalender(!showCalender)
  //   var req_updated_date = new Date(event.target.value)
  //   var req_date = req_updated_date.getFullYear() + '-' + (req_updated_date.getMonth() + 1) + '-' + req_updated_date.getDate()
  //   props.changeDate(req_date)
  //   props.setTaskDataFunc(Math.random(10000))
  // }

  const onchangeHandler = (value) =>{
    var new_date = new Date(value)
    var new_date_format = new_date.getFullYear() + '-' + (new_date.getMonth() + 1) + '-' + new_date.getDate()
    setDate(new_date_format)
    setShowCalender(!showCalender)
    props.changeDate(new_date_format)
    props.setTaskDataFunc(Math.random(10000))
  }

  const onclickWallpaper = () =>{
    setShow(true)
  }
  
  return (
    <div className='sidebar-background'>
      <div className='sidebar-profile'>
       <CgProfile className='sidebar-profile-logo' />
       <div className='sidebar-username'>Johann Manoj</div>
      </div>

      <div className='sideBar-menus'>

        <div className='sideBar-date'>
          <Date_mod 
            setTaskDataFunc = {props.setTaskDataFunc}
            changeDate = {props.changeDate}  
            set_date = {setDate}
            date_val = {date}
          />
        </div>
        
        <div className='sideBar-calender' >
          <div className='sideBar-menu-text' onClick={onClickCalenderHandler}>Calender</div>
        </div>

        <div className='sideBar-wallpaper' onClick={onclickWallpaper}>  
          <div className='sideBar-menu-text'>Wallpaper</div>
        </div>

      </div>
      {show && <ProfilePopup trigger={setShow} changeWallpaper = {props.changeWallpaper}/>}
      {/* { showCalender && <div ><input  type='date' placeholder='date' onChange={onchangeHandler}></input></div>} */}
      {/* { showCalender && <DatePicker onChange={(date) => onchangeHandler(date)}/>} */}
      { showCalender && <CalenderPopup set_show = {setShowCalender}/>}

    </div>
  )
}

export default SideBar
