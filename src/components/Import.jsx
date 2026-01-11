import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/import.png'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
function Import() {
  return (
    <>
    <div className="container">
        <div className="row marmain">
            <div className="col-md-6" style={{width:"50%"}}>
                <img src={image} alt="photo" width="100%"/>
            </div>
            <div className="col-md-6 mt-2">
                <p className='text-success'>Import</p>
                <h2>Add Recipes from 
                anywhere</h2>
                <br />
                <p>Save,customise and organise recipes, across all devices in Recipes, the recipe keeper app.</p>
                <br />
                <p>Save from your phone, on your computer, import from links or use our OCR recipe scanner to turn photos into recipes.</p>
                <div className="row mt-5">
                    <div className="col-md-1">
                        <img src={img1} alt="photo"  height="25px"/>
                    </div>
                    <div className="col-md-11 mb-1">
                    <h6 >Import recipes from your favourite websites</h6>
                    </div>
                    <div className="col-md-1 ml-1">
                        <img src={img2} alt="photo"  height="30px"/>
                    </div>
                    <div className="col-md-11 mb-1" >
                         <h6 className="feature-list-heading">Magic photos to digital recipes with OCR</h6>
                    </div>
                    <div className="col-md-1 ml-1">
                        <img src={img3} alt="photo"  height="22px"/>
                    </div>
                    <div className="col-md-11 mb-1" >
                    <h6 >Use your culinary skills &amp; create new recipes</h6>
                    </div>
                    <div className="col-md-1 ml-1">
                        <img src={img4} alt="photo"  height="22px"/>
                    </div>
                    <div className="col-md-11 mb-1 " >
                    <h6 >Multi-device with Chrome &amp;&nbsp;Safari extensions</h6>
                    </div>
                    <div className="Link mt-3">
                        <Link to="import" className='text-success'>Read more..</Link>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Import