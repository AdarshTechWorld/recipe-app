import React from 'react'
import chilli from '../assets/chilli.png'
import search from '../assets/search.png'
import spoon from '../assets/spoon.png'
import Compare from './Compare'
function Comparsion() {
  return (
    <>
        <div className='div' style={{width:"100%"}}>
                        {/* text */}
                        <div className="compare " style={{marginTop:"90px",width:"100%"}}>
                          <h1  style={{fontSize:"5rem",paddingTop:"20vh"}}> <b>Recipe app <br />
                          comparisons</b> </h1>
                        
                          <p style={{fontSize:"1.5rem"}}>Which app is right for you and your needs?</p>
                        {/* text */}
                        {/* Images */}
                            <div className="banner-image" >
                                <div className="div" >
                                  <div className="chilli" style={{position:"relative"}}>
                                      <img src={chilli} alt="photo"   width="250px" height="250px"/>
                                  </div>
                                  <div className="search" style={{position:"relative"}}>
                                      <img src={search} alt="photo" width="450px" height="450px" />
                                  </div>
                                  <div className="copy" style={{position:"relative"}}>
                                      <img src={spoon} alt="photo" width="350px" height="500px" />
                                  </div>
                                  
                                  
                                </div>
                            </div>
                        {/* Images */}
                        </div> 
                    </div>
    
    
    <Compare />
    
    
    
    </>
  )
}

export default Comparsion