import React from 'react'
import { Link } from 'react-router-dom'
import Plan from "../assets/Planning.png"
import plan1 from "../assets/plan1.jpeg"
import plan2 from "../assets/plan2.jpeg"
import plan3 from "../assets/plan3.jpeg"
import plan4 from "../assets/plan4.jpeg"
function Planning() {
  return (
    <>
        <div className="container">
        <div className="row marmain">
            <div className="col-md-6" style={{width:"50%"}}>
                <img src={Plan} alt="photo" width="100%"/>
            </div>
            <div className="col-md-6 mt-2">
                <p className='text-danger'>Plan</p>
                <h2>Meal Planning 
                    mastery
                </h2>
                <br />
                <p>Transform your weekly to-do's and turn the hassle of meal planning into a breeze with our powerful meal planner. Your planner changes with you, simple and stress-free.</p>
                <br />
                <div className="row mt-5">
                    <div className="col-md-1 pe-3">
                        <img src={plan1} alt="photo"  height="25px"/>
                    </div>
                    <div className="col-md-11 mb-1">
                    <h6 >Plan daily, weekly & monthly meals</h6>
                    </div>
                    <div className="col-md-1 ml-1">
                        <img src={plan2} alt="photo"  height="30px"/>
                    </div>
                    <div className="col-md-11 mb-1" >
                         <h6 className="feature-list-heading">Scale ingredients to serving sizes</h6>
                    </div>
                    <div className="col-md-1 ml-1">
                        <img src={plan3} alt="photo"  height="22px"/>
                    </div>
                    <div className="col-md-11 mb-1" >
                    <h6 >Add notes to your planner entry</h6>
                    </div>
                    <div className="col-md-1 ml-1">
                        <img src={plan4} alt="photo"  height="22px"/>
                    </div>
                    <div className="col-md-11 mb-1" >
                    <h6 >Move, swap & copy meals</h6>
                    </div>
                    <div className="Link mt-3">
                        <Link to="plan" className='text-danger'>Read more..</Link>
                    </div>

                </div>
            </div>
        </div>
        </div>
    
    
    
    
    </>
  )
}

export default Planning