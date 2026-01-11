import React from 'react'
import { Link } from 'react-router-dom'
import free from '../assets/free.png'
import month from '../assets/month.png'
import year from '../assets/year.png'
import tick from '../assets/tick.png'
function Plans() {
  return (
    <>
        <div className="container-fluid" style={{marginBottom:"50px"}}>
            <div className="text">
                <h1><b>Affordable pricing plans</b></h1>
                <p className='text-secondary'> Whether your heading to university or college, are an avid home cook or a 
                    <br />professional chef, we have plans for everyone!</p>
            </div>
            <div className="container-fluid mx-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card heightcol2">
                            <div className="card-body">
                                <div className="row ">
                                    <div className="col-md-3 pt-1">
                                        <img src={free} alt="photo" width='80px' height='80px' />
                                    </div>
                                    <div className="col-md-6 mx-3  pt-2 " >
                                        <h5 className='text-secondary'>Give it a go</h5>
                                        <h2><b>Free</b></h2>
                                    </div>
                                </div>
                                <p className='text-secondary pt-2 px-2 fs-5 mb-5'>Free trial</p>
                                <hr className='text-secondary' style={{borderWidth:"1.5px"}} />
                                <p className='text-secondary pt-2 px-2 fs-5 mt-4'><b>What's included:</b></p>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-6 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>Store 20 recipes</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-6 pt-2">
                                        <p style={{fontSize:"1.2rem"}}><b>Use 5 recipe scans (OCR)</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-6 pt-2">
                                    
                                        <p style={{fontSize:"1.2rem"}}><b>2 shopping lists with limited items</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-6 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>CB cloud sync</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-9 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>Use on iOS, Android & Web</b></p>
                                    </div>
                                </div>
                                <p style={{fontSize:"3rem"}} className='px-4'><b>Free</b></p>
                                <a href="https://app.cookbookmanager.com/" target='blank' ><button className='button-planbutton mx-5'>Get Started</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card heightcol2">
                            <div className="card-body">
                                <div className="row ">
                                    <div className="col-md-3 pt-1">
                                        <img src={month} alt="photo" width='80px' height='80px' />
                                    </div>
                                    <div className="col-md-6 mx-3  pt-2 " >
                                        <h5 className='text-secondary'>Short-haul</h5>
                                        <h2><b>Monthly</b></h2>
                                    </div>
                                </div>
                                <p className='text-secondary pt-2 px-2 fs-5 mb-5'>Billed monthly</p>
                                <hr className='text-secondary' style={{borderWidth:"1.5px"}} />
                                <p className='text-secondary pt-2 px-2 fs-5 mt-4'><b>What's included:</b></p>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-6 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>Unlimited recipes</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-6 pt-2">
                                        <p style={{fontSize:"1.2rem"}}><b>Unlimited recipe scans (OCR)</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-6 pt-2">
                                    
                                        <p style={{fontSize:"1.2rem"}}><b>10 shopping lists</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-6 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>10 shopping lists</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-9 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>Use on iOS, Android & Web</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-9 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>Priority support</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-9 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>Cancel any time</b></p>
                                    </div>
                                </div>
                                <div className="row " style={{alignItems:"center"}} >
                                    <div className="col-md-6">
                                        <p style={{fontSize:"3rem",textAlign:"right"}} className='ms-3'><b>$2.99</b></p>
                                    </div>
                                    <div className="col-md-5">
                                        <p style={{fontSize:"1.3rem",textAlign:"left"}} className='text-secondary text-start pt-2'><b>/month</b></p>
                                    </div>
                                </div>
                                <a href="https://app.cookbookmanager.com/" target='blank' ><button className='button-planbutton mx-5'>Get Started</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="row ">
                                    <div className="col-md-3 pt-1">
                                        <img src={year} alt="photo" width='80px' height='80px' />
                                    </div>
                                    <div className="col-md-6 mx-3  pt-2 " >
                                        <h5 className='text-secondary'>Best Value</h5>
                                        <h2><b>Yearly</b></h2>
                                    </div>
                                </div>
                                <p className='text-secondary pt-2 px-2 fs-5 mb-5'>Billed </p>
                                <hr className='text-secondary' style={{borderWidth:"1.5px"}} />
                                <p className='text-secondary pt-2 px-2 fs-5 mt-4'><b>What's included:</b></p>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-6 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>Unlimited recipes</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-6 pt-2">
                                        <p style={{fontSize:"1.2rem"}}><b>Unlimited recipe scans (OCR)</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-6 pt-2">
                                    
                                        <p style={{fontSize:"1.2rem"}}><b>10 shopping lists</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-6 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>10 shopping lists</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-9 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>Use on iOS, Android & Web</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-9 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>Priority support</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-9 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>Cancel any time</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-3">
                                        <img src={tick} alt="photo" width='55px' height='50px' />
                                    </div>
                                    <div className="col-md-9 pt-3">
                                        <p style={{fontSize:"1.2rem"}}><b>Just $1.33 per month</b></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems:"center"}} >
                                    <div className="col-md-7">
                                        <p style={{fontSize:"3rem"}} className='ms-3'><b>$15.99</b></p>
                                    </div>
                                    <div className="col-md-5">
                                        <p style={{fontSize:"1.3rem",textAlign:'left'}} className='text-secondary  pt-2'><b>/year</b></p>
                                    </div>
                                </div>
                                <a href="https://app.cookbookmanager.com/" target='blank' ><button className='button-planbutton mx-5'>Get Started</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Plans