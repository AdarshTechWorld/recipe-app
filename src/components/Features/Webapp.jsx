import React from 'react'
import spoon from './image/spoon.png'
import key from './image/key.png'
import pizza from './image/pizza.png'
import App from './App'

function Webapp() {
  return (
    <>
        <div className="div" >
        {/* text */}
        <div className="web" style={{marginTop:"90px"}}>
          <h1  style={{fontSize:"5rem",paddingTop:"20vh",textAlign:"center"}}> 
          <b> Full featured <br /> web app</b>
             </h1>
        <br />
          <p style={{fontSize:"1.5rem",textAlign:"center"}}>Add and manage your recipes on the big screen,
            <br /> when it comes to food, bigger is better</p>
        {/* text */}
        
        {/* Images */}
            <div className="banner-image " >
                <div className="div" >
                  <div className="spoon" style={{position:"relative"}}>
                      <img src={spoon} alt="photo"   width="400px" height="350px"/>
                  </div>
                  <div className="key" style={{position:"relative"}}>
                      <img src={key} alt="photo" width="550px" height="550px" />
                  </div>
                  <div className="pizza" style={{position:"relative"}}>
                      <img src={pizza} alt="photo" width="470px" height="500px" />
                  </div>
                </div>
            </div>
        {/* Images */}
        </div> 
        </div>
        <App />
    
    </>
  )
}

export default Webapp