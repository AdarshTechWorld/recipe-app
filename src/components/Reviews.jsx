import React from 'react'
import playstore from "../assets/playstore.png"
import apple from "../assets/apple.png"
function Reviews() {
  return (
    <>

        <div className="containter mt-5  mb-5" style={{backgroundColor:"whitesmoke",textAlign:"center",height:"600px"}}>
            <div className="magtop mb-2 ">
                <h5   style={{color:"green",textAlign:"center",marginTop:"40px",paddingTop:"40px"}}>Testimonals</h5>
            </div>
            <div className="div "style={{textAlign:"center"}}>
            <h1 style={{fontSize:"3rem"}}><b>Feel good reviews from our</b> </h1>
            <h1 style={{fontSize:"3rem"}}><b>customers</b></h1>
            </div>
            <div className="container mt-5">
            <div className="row ms-1 ">
                <div className=" rev col-md-4 border border-light-subtle p-3 mx-1"  style={{backgroundColor:"white",borderRadius:"5%",position:"relative"}}>
                        <div style={{position:"absolute",left:"160px",bottom:"280px",textAlign:"center"}}><img src={playstore} alt="photo"  width="50px" height="50px"/></div>
                        <h4 style={{textAlign:"center"}} className='mt-5'>Essential recipe keeper</h4>
                        <p style={{textAlign:"center",color:"gray"}}>Great way to store and share your recipes with the family. Invaluable for meal planning and shopping lists</p>
                        <div className="div" style={{textAlign:"center"}}>⭐⭐⭐⭐⭐</div>
                </div>
                <div className=" rev col-md-4 border border-light-subtle p-3 mx-1"  style={{backgroundColor:"white",borderRadius:"5%",position:"relative"}}>
                        <div style={{position:"absolute",left:"160px",bottom:"280px",textAlign:"center"}}>
                            <img src={apple} alt="photo"  width="50px" height="50px"/>
                        </div>
                        <h4 style={{textAlign:"center"}} className='mt-5'>Love it</h4>
                        <p style={{textAlign:"center",color:"gray"}}>My New Years goal was to get my recipes in order.
                             I found this app and did the free trial but quickly knew I wanted to become a lifetime member.
                             So easy to use, beautiful layout, everything I need in one place.</p>
                        <div className="div" style={{textAlign:"center"}}>⭐⭐⭐⭐⭐</div>
                </div>

                <div className=" rev col-md-4 border border-light-subtle p-3 mx-1 "  style={{backgroundColor:"white",borderRadius:"5%",position:"relative"}}>
                        <div style={{position:"absolute",left:"160px",bottom:"280px",textAlign:"center"}}>
                            <img src={apple} alt="photo"  width="50px" height="50px"/>
                        </div>
                        <h4 style={{textAlign:"center"}} className='mt-5'>Perfect recipe manager</h4>
                        <p style={{textAlign:"center",color:"gray"}}>Finally the recipe manager app I've been waiting for! Does everything I need (but not bloated by stuff I don't), 
                            is completely intuitive, and makes the weekly meal planning and shop a breeze. 
                            One of the best apps full stop.</p>
                        <div className="div" style={{textAlign:"center"}}>⭐⭐⭐⭐⭐</div>
                </div>
                
                
            </div>
            </div>
        </div>
    
    
    
    
    </>
  )
}

export default Reviews