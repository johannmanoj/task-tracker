import React , { useState }from 'react'
import './Header.css'
import AddTask from '../tasks/AddTask';


const Title = (props) => {
  
  return (
    <div className='title_header'>
      <div>
        <AddTask req_date = {props.req_date}/>
      </div>
    </div>    
  )
}

export default Title
