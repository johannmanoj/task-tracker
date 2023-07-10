import React from 'react'
import './CalenderPopup.css'


const CalenderPopup = (props) => {
  
  const onClickHandler = () =>{
    props.set_show(false)
  }

  return(
    <div>
      <div className='backdrop' onClick={onClickHandler}/>
      <div className='modal'>
        <header className='header'>
          <h3>Calender</h3>
        </header>
        
        <footer className='actions'>
          <button className='button' onClick={onClickHandler}>Close</button>
        </footer>
      </div>
    </div>
  )
}

export default CalenderPopup 
