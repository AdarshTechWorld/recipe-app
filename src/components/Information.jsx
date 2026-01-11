import React from 'react'
import book from '../assets/book.png'
import leaf from '../assets/leaf.png'
import heart from '../assets/heart.png'
function Information() {
  return (
    <>
    
    {/* Information */}
    <div className="container-fluid my-4 ">
          <div className="row martop marmain">
          
            <div className="col-md-4 " style={{textAlign:"center"}}>
                <img src={book} alt="photo" width="50px" height="40px" />
                <h3><b>Download for free</b> </h3>
                <p className='fs-6'> Download the app and try CookBook for free with up to 20 recipes  & 5 OCR scans.</p>
            </div>
            <div className="col-md-4" style={{textAlign:"center"}}>
                <img src={heart} alt="photo" width="50px" height="40px"  />
                <h3><b>Make it your own</b> </h3>
                <p className='fs-6'>Import from the web, scan physical recipes or create them from scratch, on all your devices.</p>
            </div>
            <div className="col-md-4" style={{textAlign:"center"}}>
                <img src={leaf} alt="photo" width="50px" height="40px"  />
                <h3><b>Plan, shop & cook</b> </h3> 
                <p className='fs-6'>Plan your meals, create interactive shopping lists and cook with scaling, conversion & timers.</p>
            </div>
            
          </div>
      </div>
    {/* Information */}
    
    
    </>
  )
}

export default Information