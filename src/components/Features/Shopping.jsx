import React from 'react'
import shop from './image/shop.png'

function Shopping() {
  return (
    <>
        <div className="container mx-4">
        <div className="row">
        <div className="col-md-6 " style={{alignContent:"center",paddingLeft:"60px"}} >
            <h5 className='fst-italic' style={{color:"orange"}}>Shopping</h5>
            <h1 style={{fontSize:"2.7rem"}}><b>Smart shopping lists</b></h1>
            <br />
            <p className='text-secondary' style={{fontSize:"1.2rem"}}>Make the weekly shop seamless. Create new 
                <br />interactive shopping lists directly or from your planned meals.</p>
            <h5 className='text-secondary fw-normal'><b className='text-black'>Interactive.</b> Strike off or delete items as you <br /> shop, edit items & swap aisles.</h5><br />
            <h5 className='text-secondary fw-normal'><b className='text-black'>Custom Extra Items.</b> Add your weekly staples to  <br />your list (don't forget the loo roll!).</h5><br />
            <h5 className='text-secondary fw-normal'><b className='text-black'>AI Merge.</b> Combine ingredients with our smart <br /> AI product parsing and merging.</h5><br />
            <h5 className='text-secondary fw-normal'><b className='text-black'>Sync, Export & Print.</b> Live sync across devices, <br /> export your shopping list or print to PDF.</h5>
            
        </div>
        <div className="col-md-6">
            <img src={shop} alt="Your Recipe" height="600px" width="100%" style={{marginLeft:"10%"}}/>
        </div>
        </div>
     </div>
    </>
  )
}

export default Shopping