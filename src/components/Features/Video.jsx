import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import play from './image/icon.png'

function Video() {
  
  return (
    <>
        <div className="container" style={{width:"80%",height:"900px",alignContent:"center"}}>

            <div className="video-container" >
                {/* You can add any content here if needed */}
                <div className="div">
                <a href="https://youtu.be/tKH1f9T61lI" target='blank'><img src={play} alt="photo" height="50px" width="50px" className="play" style={{justifyItems:"center"}}  /> </a>
                </div>   
            </div>
            
            <div className="row mb-5 " style={{justifyContent:"center"}} >
                  <div className="col-md-4 ms-5" >
                    
                    <Link to="/start" className="button-1" >GET STARTED</Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/home" className='button-2'>FIND MORE</Link>
                  </div>
            </div>

        </div>
        
    
    
    
    
    </>
  )
}

export default Video