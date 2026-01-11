import React from 'react'
import meal from './image/meal.png'

function Mealplan() {
  return (
    <>
    <div className="container mx-4" height="600px">
        <div className="row">
            <div className="col-md-6 py-5 ">
                <img src={meal} alt="Your Recipe" height="550px" width="100%" style={{marginRight:"10%"}}/>
            </div>
            <div className="col-md-6 " style={{alignContent:"center",paddingLeft:"60px"}} >
                <h5 className='fst-italic' style={{color:"orange"}}>Meal Planner</h5>
                <h1 style={{fontSize:"2.7rem"}}><b>Meal planning made <br /> simple</b></h1>
                <br />
                <p className='text-secondary' style={{fontSize:"1.2rem"}}>Take the hassle out of meal planning with the 
                    <br />powerful planner. Your planner changes with you.</p>
                <h5 className='text-secondary fw-normal'><b className='text-black'>Day, week & month.</b> Organise your meals and <br /> plan either daily, weekly or monthly. </h5><br />
                <h5 className='text-secondary fw-normal'><b className='text-black'>Copy, move & edit.</b>Move your week around as it <br /> changes, edit your meal or meal slot.</h5><br />
                <h5 className='text-secondary fw-normal'><b className='text-black'>Customise & scale.</b> Adjust servings and make <br /> your planner yours with note entries for the no <br /> cook takeaway nights!</h5><br />
                <h5 className='text-secondary fw-normal'><b className='text-black'>Print & share.</b> Print your meal planner and pin <br /> into the fridge for the whole family to see.</h5> 
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Mealplan