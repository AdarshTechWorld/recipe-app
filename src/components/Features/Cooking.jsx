import React from 'react'
import cook from './image/cook.png'

function Cooking() {
  return (
    <>
    <div className="container mx-4" height="600px" style={{marginBottom:"100px"}}>
        <div className="row">
            <div className="col-md-6 py-5 ">
                <img src={cook} alt="Your Recipe" height="550px" width="100%" style={{marginRight:"10%"}}/>
            </div>
            <div className="col-md-6 " style={{alignContent:"center",paddingLeft:"60px"}} >
                <h5 className='fst-italic' style={{color:"orange"}}>Cooking</h5>
                <h1 style={{fontSize:"2.7rem"}}><b>Your kitchen cooking <br /> companion</b></h1>
                <br />
                <p className='text-secondary' style={{fontSize:"1.2rem"}}>Transforming cooking into a simpler, cleaner and stress- <br />free affair with smart, intuitive features.</p>
                <h5 className='text-secondary fw-normal'><b className='text-black'>Cooking Mode.</b> Intuitive cooking with adjustable <br /> font size & voice prompts & narration. </h5><br />
                <h5 className='text-secondary fw-normal'><b className='text-black'>Progress Tracking.</b>Keep track off your progress <br /> whilst cooking by crossing out and hiding <br /> completed ingredients and steps.</h5><br />
                <h5 className='text-secondary fw-normal'><b className='text-black'>Scaling.</b>More mouths to feed? Scale recipes up <br /> or down to adjust the ingredients quickly.</h5><br />
                <h5 className='text-secondary fw-normal'><b className='text-black'>Timers & Temps.</b> Automatically detect & create  <br />timers from your recipes and convert <br /> temperatures between measures.</h5> 
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Cooking