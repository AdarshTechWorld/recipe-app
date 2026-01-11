import React from 'react'
import recipe from "../assets/recipe.jpg"
import Import from './Import'
import Organise from './Organise'
import Numbers from './Numbers'
import Planning from './Planning'
import Shopping from './Shopping'
import Reviews from './Reviews'
import Start from './Start'
import Question from './Question'
import Footer from './Footer'
import chow from '../assets/Chow.png'
import phone from '../assets/phone.png'
import ingri from '../assets/Ingri.png'
import appstore from "../assets/appstore.png" 
import playstore from "../assets/playstore1.png" 
import webapp from "../assets/webapp.png" 
import rating from "../assets/rating.png" 
import Information from './Information'
function Banner() {
  return (
    <>
    {/* Banner */}
    <div className="div"  >
        {/* text */}
        <div className="banner " style={{marginTop:"90px",width:"100%"}}>
          <h1  style={{fontSize:"5rem",paddingTop:"20vh"}}> <b>All-in-one <br />
          recipe manager <br /> & planner app</b> </h1>
        
          <p style={{fontSize:"1.5rem"}}>The ultimate recipe organiser for easy access to <br />
            all of your recipes on all of your devices</p>
        {/* text */}
        {/* Rating */}
            <div className="container" style={{paddingInline:"200px",position:"absolute",bottom:"00px",top:"700px"}}>
              <div className="row ms-3" style={{alignItems:"center"}}>
                <div className="col-md-6 mb-2" style={{textAlign:"right"}}>
                  <img src={rating} alt="photo" width="220px" height="35px"  />
                </div>
                <div className="col-md-6" style={{textAlign:"left"}}>
                  <h6>
                  4.8 rating on Apple App Store & Google Play</h6>
                </div>
              </div>
            </div>
        {/* Rating */}
        {/* Images */}
            <div className="banner-image" >
                <div className="div" >
                  <div className="chow" style={{position:"relative"}}>
                      <img src={chow} alt="photo"   width="300px" height="300px"/>
                  </div>
                  <div className="ingri" style={{position:"relative"}}>
                      <img src={ingri} alt="photo" width="450px" height="450px" />
                  </div>
                  <div className="phone" style={{position:"relative"}}>
                      <img src={phone} alt="photo" width="400px" height="600px" />
                  </div>
                  
                  
                </div>
        </div>
        {/* Images */}
        {/* Download */}
            <div className="container mb-5" style={{paddingInline:"260px",position:"absolute",top:"600px",left:"60px"}}>
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
    <Information />
    <Import />
    <Organise />
    <Numbers />
    <Planning />
    <Shopping />
    <Reviews />
    <Start />
    <Question />
    
    </>
  )
}
export default Banner