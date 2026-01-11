import React from 'react'
import car from "../assets/carrot.png"
import pasta from "../assets/pasta.png"
import price from "../assets/price.png"
import Plans from './Plans'
function Pricing() {
  return (
    <>
        <div className='div' style={{width:"100%"}}>
                {/* text */}
                <div className="pricing " style={{marginTop:"90px",width:"100%"}}>
                  <h1  style={{fontSize:"5rem",paddingTop:"20vh"}}> <b>Pricing Plans</b> </h1>
                
                  <p style={{fontSize:"1.5rem"}}>One plan, all devices, access your recipes on 
                    <br /> all your devices including iOS, Android & Web</p>
                {/* text */}
                {/* Images */}
                    <div className="banner-image" >
                        <div className="div" >
                          <div className="car" style={{position:"relative"}}>
                              <img src={car} alt="photo"   width="250px" height="250px"/>
                          </div>
                          <div className="pasta" style={{position:"relative"}}>
                              <img src={pasta} alt="photo" width="450px" height="450px" />
                          </div>
                          <div className="price" style={{position:"relative"}}>
                              <img src={price} alt="photo" width="300px" height="500px" />
                          </div>
                          
                          
                        </div>
                    </div>
                {/* Images */}
                </div> 
            </div>
    
    <Plans />
    
    
    </>
  )
}

export default Pricing