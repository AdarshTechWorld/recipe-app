import React from 'react'
import donet from './image/donet.png'
import melon from './image/melon.png'
import dhani from './image/dhani.png'
import Video from './Video'

function Videobanner() {
  return (
    <>
    <div className="div" >
        {/* text */}
        <div className="video" style={{marginTop:"90px"}}>
          <h1  style={{fontSize:"5rem",paddingTop:"20vh",textAlign:"center"}}> 
          <b>Preview video</b>
             </h1>
        <br />
          <p style={{fontSize:"1.5rem",textAlign:"center"}}>Your personal recipe keeper, organiser & planner <br />
          check out the features inside</p>
        {/* text */}
        
        {/* Images */}
            <div className="banner-image " >
                <div className="div" >
                  <div className="donet" style={{position:"relative"}}>
                      <img src={donet} alt="photo"   width="400px" height="350px"/>
                  </div>
                  <div className="dhani" style={{position:"relative"}}>
                      <img src={dhani} alt="photo" width="550px" height="550px" />
                  </div>
                  <div className="melon" style={{position:"relative"}}>
                      <img src={melon} alt="photo" width="550px" height="570px" />
                  </div>
                </div>
            </div>
        {/* Images */}
        </div> 
        </div>
    <Video />
    </>
  )
}

export default Videobanner