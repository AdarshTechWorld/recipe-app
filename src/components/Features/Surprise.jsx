import React from 'react'
import sup from './image/sup.png'
import { Link } from 'react-router-dom'
function Surprise() {
  return (
    <>

    <div className="div" style={{backgroundColor:"whitesmoke",height:"500px"}}>
        <div className="container martop  " >
            <div className="row ">
                <div className="col-md-6" style={{alignContent:"center"}}>
                    <h5 className='text-info fst-italic fs-4' style={{color:"orange"}}>Surprise Me</h5>
                    <h1 style={{fontSize:"3rem"}}><b>Mix it up with <br /> 'Surprise Me'</b></h1>
                    <p className='fs-5'>Tired of the daily dinner dilemma? Let our "Surprise Me" 
                        <br /> feature suggest a delicious recipe to spice up your meal 
                        <br /> planning.</p>
                    
                    <Link className="button-71" to="/start">GET STARTED</Link>
                </div>
                <div className="col-md-6 justify-content-center">
                    <img src={sup} alt="photo" width="450px" height="450px" className='food' />
                </div>
            </div>
        </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Surprise