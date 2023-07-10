import React from 'react'
import './ProfilePopup.css'

const ProfilePopup = (props) => {
  const onClickHandler = () =>{
    props.trigger(false)
  }

  const onClickWallpaper1 = () =>{ props.changeWallpaper("https://images.wallpaperscraft.com/image/single/leaves_plant_green_118405_1920x1080.jpg") }

  const onClickWallpaper2 = () =>{ props.changeWallpaper("https://wallpapercave.com/wp/Jx3kwzS.jpg") }

  const onClickWallpaper3 = () =>{ props.changeWallpaper("https://images.wallpaperscraft.com/image/single/beach_top_view_shore_162951_1280x1024.jpg") }

  const onClickWallpaper4 = () =>{ props.changeWallpaper("https://images.hdqwalls.com/download/nature-hd-sd-1920x1080.jpg") }

  const onClickWallpaper5 = () =>{ props.changeWallpaper("https://cdn.pixabay.com/photo/2015/09/18/06/35/the-background-945096_960_720.jpg") }

  const onClickWallpaper6 = () =>{ props.changeWallpaper("https://wallpaper.dog/large/10734569.jpg") }
  
  return( 
    <div>
      <div className='profile-backdrop' onClick={onClickHandler}/>
      <div className='profile-modal'>
        <div className='wallpaper-row'>
          <div className='wallpaper1' onClick={onClickWallpaper1} ></div>
          <div className='wallpaper2' onClick={onClickWallpaper2} ></div>
          <div className='wallpaper3' onClick={onClickWallpaper3} ></div>
        </div>
        <div className='wallpaper-row'>
          <div className='wallpaper4' onClick={onClickWallpaper4} ></div>
          <div className='wallpaper5' onClick={onClickWallpaper5} ></div>
          <div className='wallpaper6' onClick={onClickWallpaper6} ></div>
        </div>
        
        <footer className='actions' > 
          <button className='close-button' onClick={onClickHandler}>Close</button>
        </footer>
      </div>
    </div>
  )
}

export default ProfilePopup 
