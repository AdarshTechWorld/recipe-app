import React from 'react'
import bal from './image/bal.png'
import flour from './image/flour.png'
import item from './image/item.png'
import Mealplan from './Mealplan'
import Shopping from './Shopping'
import Surprise from './Surprise'
import Cooking from './Cooking'

function Planshop() {
  return (
    <>
        <div className="div" >
        {/* text */}
        <div className="cook" style={{marginTop:"90px"}}>
          <h1  style={{fontSize:"5rem",paddingTop:"20vh",textAlign:"center"}}> 
          <b>Plan, shop <br />& cook</b>
             </h1>
        <br />
          <p style={{fontSize:"1.5rem",textAlign:"center"}}>Plan your meals, hit the shops, then get busy 
            <br />in the kitchen!</p>
        {/* text */}
        
        {/* Images */}
            <div className="banner-image " >
                <div className="div" >
                  <div className="bal" style={{position:"relative"}}>
                      <img src={bal} alt="photo"   width="400px" height="350px"/>
                  </div>
                  <div className="flour" style={{position:"relative"}}>
                      <img src={flour} alt="photo" width="550px" height="550px" />
                  </div>
                  <div className="vegetable" style={{position:"relative"}}>
                      <img src={item} alt="photo" width="550px" height="570px" />
                  </div>
                </div>
            </div>
        {/* Images */}
        </div> 
        </div>
    <Mealplan />
    <Shopping />
    <Surprise />
    <Cooking />
    </>
  )
}

export default Planshop