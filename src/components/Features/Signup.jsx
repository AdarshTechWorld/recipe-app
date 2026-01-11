import React from 'react'
import food from './image/food.png'

function Signup() {
  return (
    <>
    <div className="div" style={{backgroundColor:"whitesmoke",height:"500px"}}>
    <div className="container martop  " >
        <div className="row ">
            <div className="col-md-6 justify-content-center">
                <img src={food} alt="photo" width="450px" height="450px" className='food' />
            </div>
            <div className="col-md-6" style={{alignContent:"center"}}>
                <h5 className='text-info fst-italic fs-4'>Leftover ingredients</h5>
                <h1 style={{fontSize:"3rem"}}><b>What's in my fridge?</b></h1>
                <p className='fs-5'>Don't fancy going to the shops? Enter ingredients you <br />
                 want to include and exclude in your search and <br />
                  CookBook will show what you can make from your <br />
                   recipes!</p>
                <a href="https://app.cookbookmanager.com/"><button className="button-" role="button">SIGN UP NOW</button></a>
            </div>
        </div>
    </div>
    </div>
    
    
    
    
    </>
  )
}

export default Signup