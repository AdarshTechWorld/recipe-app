import React from 'react'
import { Link } from 'react-router-dom'
import shop from "../assets/shopping.png"
import shop1 from "../assets/shop1.jpeg"
import shop2 from "../assets/shop2.jpeg"
import shop3 from "../assets/shop3.jpeg"
import shop4 from "../assets/shop4.jpeg"
function Shopping() {
  return (
    <>
        <div className="container  ">
        <div className="row ">
        <div className="col-md-6 mt-5 ">
                <p className=' mt-5' style={{color:"orange"}}>Shop</p>
                <h2>Smart shopping lists</h2>
                <br />
                <p>Generate lists, add recipes or ingredients and let CookBook do the rest. Smart ingredient merging, shopping aisle detection and quick organisation.</p>
                <div className="row mt-5">
                    <div className="col-md-1">
                        <img src={shop1} alt="photo"  height="25px"/>
                    </div>
                    <div className="col-md-11 mb-1">
                    <h6 className="feature-list-heading">Interactive AI powered smart shopping lists</h6>
                    </div>
                    <div className="col-md-1 ml-1">
                        <img src={shop2} alt="photo"  height="30px"/>
                    </div>
                    <div className="col-md-11 mb-1" >
                    <h6 className="feature-list-heading">Strike off or delete items as you shop</h6>
                    </div>
                    <div className="col-md-1 ml-1">
                        <img src={shop3} alt="photo"  height="22px"/>
                    </div>
                    <div className="col-md-11 mb-1" >
                    <h6 className="feature-list-heading">Create multiple lists & save your general items</h6>
                    </div>
                    <div className="col-md-1 ml-1">
                        <img src={shop4} alt="photo"  height="22px"/>
                    </div>
                    <div className="col-md-11 mb-1" >
                    <h6 className="feature-list-heading">Export, print or save your list for later</h6>
                    </div>
                    <div className="Link mt-3">
                        <Link to="plan" style={{color:"orange"}}>Read more..</Link>
                    </div>


                </div>
            </div>
            <div className="col-md-6" style={{width:"50%"}}>
                <img src={shop} alt="photo" width="100%"/>
            </div>
            
        </div>
    </div>
    
    
    
    </>
  )
}

export default Shopping