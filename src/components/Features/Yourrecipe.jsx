import React from 'react'
import recipe from './image/yourrecipe.png'

function Yourrecipe() {
  return (
    <>
     <div className="container mx-4">
        <div className="row">
        <div className="col-md-6 " style={{alignContent:"center",paddingLeft:"60px"}} >
            <h5 className='text-success fst-italic'>Your recipes</h5>
            <h1 style={{fontSize:"2.7rem"}}><b>Create and customise</b></h1>
            <br />
            <p className='text-secondary' style={{fontSize:"1.2rem"}}>As your personal recipe manager, you can create, build 
                <br />and customise your CookBook to suit you.</p>
            <h5 className='text-secondary fw-normal'><b className='text-black'>Create & Edit.</b> Curate your own recipes from <br /> scratch & edit as you develop.</h5><br />
            <h5 className='text-secondary fw-normal'><b className='text-black'>Clone & Copy. </b> Want to try a different variation <br /> of a recipe? Hit clone to create a duplicate.</h5><br />
            <h5 className='text-secondary fw-normal'><b className='text-black'>All Devices.</b> Access your CookBook on all your <br /> devices, under one plan.</h5><br />
            <h5 className='text-secondary fw-normal'><b className='text-black'>Cloud Sync.</b> All stored in our cloud to sync <br /> quickly between your devices.</h5>
            
        </div>
        <div className="col-md-6">
            <img src={recipe} alt="Your Recipe" height="600px" width="100%" style={{marginLeft:"10%"}}/>
        </div>
        </div>
     </div>
    
    
    
    
    
    
    </>
  )
}

export default Yourrecipe