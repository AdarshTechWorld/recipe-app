import React from 'react'
import tom from "../assets/tom.png"
import plate from "../assets/plate.png"
import watermelon from "../assets/watermelon.png"
import appstore from "../assets/appstore.png" 
import playstore from "../assets/playstore1.png" 
import webapp from "../assets/webapp.png" 
import Create from './Create'
function Getstarted() {
  return (
    <>
    {/* Banner */}
    <div className="div">
        {/* text */}
        <div className="get" style={{marginTop:"90px"}}>
          <h1  style={{fontSize:"5rem",paddingTop:"20vh"}}> <b>Start building <br />
          your CookBook</b> </h1>
        
          <p style={{fontSize:"1.5rem"}}>Get started, sign up and access all download links
            <br /> and extensions</p>
        {/* text */}
        {/* Images */}
            <div className="banner-image" >
                <div className="div" >
                  <div className="tom" style={{position:"relative"}}>
                      <img src={tom} alt="photo"   width="300px" height="300px"/>
                  </div>
                  <div className="plate" style={{position:"relative"}}>
                      <img src={plate} alt="photo" width="450px" height="450px" />
                  </div>
                  <div className="watermelon" style={{position:"relative"}}>
                      <img src={watermelon} alt="photo" width="400px" height="500px" />
                  </div>
                  
                  
                </div>
            </div>
        {/* Images */}
        {/* Download */}
            <div className="container mb-5" style={{paddingInline:"260px",position:"absolute",top:"520px",left:"60px"}}>
                    <div className="row ms-4 ">
                      <div className="col-md-4 ">
                        <a href="https://apps.apple.com/au/app/cookbook-recipe-manager/id1073341917" target='blank'><img src={appstore} alt="photo" width="170px" height="70px"/></a>
                      </div>
                      <div className="col-md-4">
                        <a href="https://play.google.com/store/apps/details?id=com.cookbook.cbapp" target='blank'><img src={playstore} alt="photo"  width="170px" height="70px"/></a>
                      </div>
                      <div className="col-md-4">
                        <a href="https://app.cookbookmanager.com/" target='blank'><img src={webapp} alt="photo"  width="170px" height="70px"/></a>
                      </div>
                    </div>
            </div>
        {/* Download */}
        </div> 
    </div>
    {/* Banner */}
    
    <Create />
    
    
    </>
  )
}

export default Getstarted