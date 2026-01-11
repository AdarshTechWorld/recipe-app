import React from 'react'
import red  from './image/reditem.png'
import straw  from './image/straw.png'
import glove  from './image/glove.png'
import Clear from './Clear'
import Signup from './Signup'
import Tools from './Tools'
function OrganiseSearch() {
  return (
    <> 
        <div className="div" >
        {/* text */}
        <div className="organise" style={{marginTop:"90px"}}>
          <h1  style={{fontSize:"5rem",paddingTop:"20vh"}}> 
          <b> Get recipe <br />organised</b>
             </h1>
        <br />
          <p style={{fontSize:"1.5rem"}}>Streamline your recipe collection and effortlessly
            <br /> locate the perfect dish for any occasion</p>
        {/* text */}
        
        {/* Images */}
            <div className="banner-image " >
                <div className="div" >
                  <div className="red" style={{position:"relative"}}>
                      <img src={red} alt="photo"   width="300px" height="300px"/>
                  </div>
                  <div className="straw" style={{position:"relative"}}>
                      <img src={straw} alt="photo" width="480px" height="480px" />
                  </div>
                  <div className="glove" style={{position:"relative"}}>
                      <img src={glove} alt="photo" width="470px" height="600px" />
                  </div>
                </div>
            </div>
        {/* Images */}
        </div> 
        </div>
        <Clear />
        <Signup />
        <Tools />
    </>
  )
}

export default OrganiseSearch