import React from 'react'
import clear from './image/clear.png'

function Clear() {
  return (
    <>
        <div className="container mx-4 martop">
        <div className="row">
        <div className="col-md-6 " style={{alignContent:"center",paddingLeft:"60px"}} >
            <h5 className='text-info fst-italic'>Clear the clutter</h5>
            <h1 style={{fontSize:"2.7rem"}}><b>Organise your recipes to suit you</b></h1>
            <br />
            <p className='text-secondary' style={{fontSize:"1.2rem"}}>Keep your digital recipe book in top shape and avoid
                <br /> the hunt with our search and filter tools.</p>
            <h5 className='text-secondary fw-normal'><b className='text-black'>Tags.</b> Categorise your recipes and sub-filter with <br />combinations. Add some emojis too 😋</h5><br />
            <h5 className='text-secondary fw-normal'><b className='text-black'>Search & Filter. </b> Find recipes using keywords,<br /> name, source, or with leftovers in your fridge!</h5><br />
            <h5 className='text-secondary fw-normal'><b className='text-black'>Link & Pin.</b> Pin your active recipes for quick <br /> access & link related dishes.</h5><br />
            <h5 className='text-secondary fw-normal'><b className='text-black'>Notes & nutrition.</b> Additional text fields for you <br /> to add extra recipe info with USDA nutrition <br /> display.</h5>
            
        </div>
        <div className="col-md-6">
            <img src={clear} alt="Your Recipe" height="650px" width="100%" style={{marginLeft:"10%"}}/>
        </div>
        </div>
     </div>
    
    
    </>
  )
}

export default Clear