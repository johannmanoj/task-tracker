import React, { useState } from 'react'
import './Date.css'
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const DateComp = (props) => {
  // var today = new Date()
  // var curr_date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  // const [date, setDate] = useState(curr_date)
  // const [showCalender, setShowCalender] = useState(false)

  


  const onClickDateChange = (side) => {
    var value
    if(side == "left"){value = -1} else {value = 1}
    
    var new_date = new Date(props.date_val)
    var updated_date = new_date.setDate(new_date.getDate() + value);
    var req_updated_date = new Date(updated_date)
    var req_date = req_updated_date.getFullYear() + '-' + (req_updated_date.getMonth() + 1) + '-' + req_updated_date.getDate()
    props.set_date(req_date.toString())
    props.changeDate(req_date.toString())
    props.setTaskDataFunc(Math.random(10000))
  }

  return (
    <div>
      <div className='date-component'>
        {/* <div type='date' className='date-space'><FaCalendarAlt className='calender' onClick={onClickCalenderHandler}/></div> */}
        <div className='date-space'><IoIosArrowBack className='arrow' onClick={() => onClickDateChange("left")}/></div>
        <div className='date-text'>{props.date_val}</div>
        <div className='date-space'><IoIosArrowForward className='arrow' onClick={() => onClickDateChange("right")}/></div>

      </div>
      {/* { showCalender && <div ><input className='calender_input' type='date' placeholder='date' onChange={onchangeHandler}></input></div>} */}
    </div>
  )
}

export default DateComp
