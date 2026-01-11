import React from 'react'
import spice from "./image/spices.png"
import vege from "./image/vege.png"
import book from "./image/book.png"
import Build from './Build'
import Banner from './Banner'
import Yourrecipe from './Yourrecipe'
import Recipescanner from './Recipescanner'
function Addimport() {
  return (
    <>
        <div className="div">
        {/* text */}
        <div className="import" style={{marginTop:"90px"}}>
          <h1  style={{fontSize:"5rem",paddingTop:"20vh"}}> 
          Add recipes <br /> from anywhere
             </h1>
        
          <p style={{fontSize:"1.5rem"}}>Create, add & import all of your favourite recipes
            <br /> in your personal CookBook</p>
        {/* text */}
        {/* Images */}
            <div className="banner-image" >
                <div className="div" >
                  <div className="spice" style={{position:"relative"}}>
                      <img src={spice} alt="photo"   width="300px" height="300px"/>
                  </div>
                  <div className="vege" style={{position:"relative"}}>
                      <img src={vege} alt="photo" width="480px" height="480px" />
                  </div>
                  <div className="book" style={{position:"relative"}}>
                      <img src={book} alt="photo" width="470px" height="650px" />
                  </div>
                </div>
            </div>
        {/* Images */}
        </div> 
        </div>
    <Build />
    <Yourrecipe />
    <Banner />
    <Recipescanner />
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Addimport