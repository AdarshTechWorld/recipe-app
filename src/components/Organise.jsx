import React from 'react'
import { Link } from 'react-router-dom'
import org from "../assets/organise.png"
import org1 from "../assets/org1.jpeg"
import org2 from "../assets/org2.jpeg"
import org3 from "../assets/org3.jpeg"
import org4 from "../assets/org4.jpeg"
function Organise() {
  return (
    <>
    <div className="container   ">
        <div className="row  ">
        <div className="col-md-6 mt-5 ">
                <p className='text-info mt-5'>Organise</p>
                <h2>Organise with ease</h2>
                <br />
                <p>Say goodbye to recipe chaos and hello to effortless organisation! You can easily find and manage your recipes, no matter how many you have.</p>
                <div className="row mt-5" >
                    <div className="col-md-1" >
                        <img src={org1} alt="photo"  height="20px"/>
                    </div>
                    <div className="col-md-11 mb-1">
                    <h6 className="feature-list-heading">Sort, categorise and group your recipes</h6>
                    </div>
                    <div className="col-md-1 ml-1">
                        <img src={org2} alt="photo"  height="20px"/>
                    </div>
                    <div className="col-md-11 mb-1" >
                    <h6 className="feature-list-heading">Intuitive searching with keywords and filters</h6>
                    </div>
                    <div className="col-md-1 ml-1">
                        <img src={org3} alt="photo"  height="20px"/>
                    </div>
                    <div className="col-md-11 mb-1" >
                    <h6 className="feature-list-heading">Lost for ideas? Let us suggest a recipe!</h6>
                    </div>
                    <div className="col-md-1 ml-1">
                        <img src={org4} alt="photo"  height="20px"/>
                    </div>
                    <div className="col-md-11 mb-1" >
                    <h6 className="feature-list-heading">Pin, rate, favourite, link and more!</h6>
                    </div>
                    <div className="Link mt-3">
                        <Link to="organise" className='text-info'>Read more..</Link>
                    </div>

                </div>
            </div>
            <div className="col-md-6" style={{width:"50%"}}>
                <img src={org} alt="photo" width="100%"/>
            </div>
            
            
        </div>
    </div>
    
    
    
    </>
  )
}

export default Organise