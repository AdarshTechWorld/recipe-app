import React from 'react'
import start from '../assets/start.png'
import { Link } from 'react-router-dom'
import back from '../assets/back.png'
function Start() {
  return (
    <>
    <div className="container-fluid   ">
        <div className="row  ">
            <div className="Back col-md-6 px-5 py-5" style={{textAlign:"left"}}>
                    <h1 style={{fontSize:"4rem"}}>CookBook</h1>
                    <h2 style={{fontSize:"2rem"}}><b>Your ultimate kitchen  <br /> companion.</b></h2>
                    <br />
                    <h5>Tried, tested & loved by thousands of home cooks.<br />
                     CookBook is free to use*, see what all the fuss is <br /> about!</h5>
                    <p>* with up to 20 recipes and 5 OCR scans</p>
                    <Link to="/start" className='button-77 mt-4'>GET STARTED</Link>
                    {/* <button class="button-77 mt-4" role="button">GET STARTED</button> */}
            </div>
            <div className="col-md-6  p-4">
                <img src={start} alt="photo" height="465px" />
            </div>
        </div>

    </div>   
    </>
  )
}

export default Start