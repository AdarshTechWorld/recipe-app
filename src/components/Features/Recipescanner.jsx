import React from 'react'
import scanner from "./image/scanner.png"

function Recipescanner() {
  return (
    <>
    <div className="container mx-4" height="600px" style={{marginBottom:"100px"}}>
        <div className="row">
            <div className="col-md-6 py-5 ">
                <img src={scanner} alt="Your Recipe" height="550px" width="100%" style={{marginRight:"10%"}}/>
            </div>
            <div className="col-md-6 " style={{alignContent:"center",paddingLeft:"60px"}} >
                <h5 className='text-success fst-italic'>OCR magic</h5>
                <h1 style={{fontSize:"2.7rem"}}><b>Recipe scanner</b></h1>
                <br />
                <p className='text-secondary' style={{fontSize:"1.2rem"}}>Import physical recipes from books, magazines & <br />
                Grandma's hand-written trade secrets without the need <br /> to type them in yourself.</p>
                <h5 className='text-secondary fw-normal'><b className='text-black'>Take a photo.</b> Birdseye view, clear, straight and well lit, of the entire recipe page. </h5><br />
                <h5 className='text-secondary fw-normal'><b className='text-black'>Select recipe sections. </b>Move the selection box over each area. </h5><br />
                <h5 className='text-secondary fw-normal'><b className='text-black'>Hit 'Scan'.</b> The magic commences.</h5><br />
                <h5 className='text-secondary fw-normal'><b className='text-black'>Review & save.</b>  Check your scan and add any additional info i.e. tags. </h5> 
            </div>
        </div>
     </div>
    </>
  )
}

export default Recipescanner