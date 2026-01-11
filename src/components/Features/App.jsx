import React from 'react'
import webapp from './image/webapp.png'
import extension from './image/extension.png'
import planning from './image/planning.png'
import signup from './image/signup.png'
function App() {
  return (
    <>
    <div className="container-fluid mb-0" style={{backgroundColor:'whitesmoke',marginBottom:"100px"}}>
        <div className="row">
            {/* webapp */}
            <div className="col-md-6">
                <img src={webapp} alt="photo" width="100%" height="450px" />
            </div>
            <div className="col-md-6  " style={{alignContent:"center"}}>
                <h1 style={{fontSize:"3rem"}}><b>See your recipes in <br /> full screen</b></h1>
                <p className='fs-5 text-secondary'>Create, organize and manage your recipes with ease <br />
                using our web app's sleek and intuitive interface, <br />
                designed for optimal viewing on large screens. Whether <br /> 
                you're typing on your computer or laptop, let your <br />
                culinary creativity flow.</p>
                <a href="https://app.cookbookmanager.com/" target='blank'><button className="button-84 " style={{justifyContent:"center"}} role="button">OPEN WEB APP</button></a>
            </div>
            {/* webapp */}
            {/* extension */}
            <div className="col-md-6 ps-5 " style={{alignContent:"center"}}>
                <h1 style={{fontSize:"3rem"}}><b>Import from your <br /> browser</b></h1>
                <p className='fs-5 text-secondary'>Using the CookBook Google Chrome extension, you can <br />
                 quickly and seamlessly import recipes when browsing  <br />
                 the web straight into your CookBook. Adding your <br /> 
                 favourite recipes has never been so easy!</p>
                <a href="https://chromewebstore.google.com/detail/cookbook-manager-recipe-i/pehlnokhmjhnlghjkjbepjimjbcnjnlb?hl=en-GB" target='blank'><button className="button-84 " style={{justifyContent:"center"}} role="button">GET THE EXTENSION</button></a>
            </div>
            <div className="col-md-6">
                <img src={extension} alt="photo" width="100%" height="450px" />
            </div>
            {/* extension */}
            {/* planning */}
            <div className="col-md-6">
                <img src={planning} alt="photo" width="100%" height="450px" />
            </div>
            <div className="col-md-6 " style={{alignContent:"center"}}>
                <h1 style={{fontSize:"3rem"}}><b>Plan for the week <br />from the couch</b></h1>
                <p className='fs-5 text-secondary'>Take the pain out of meal planning and get prepped for <br />
                the day, week or month from the comfort of your <br />
                squishy couch. Effortlessly copy, move and delete meals, <br />
                your planner can change with your ever moving <br />
                lifestyle.</p>
                <a href="https://app.cookbookmanager.com/" target='blank'><button className="button-84 " style={{justifyContent:"center"}} role="button">START PLANNING</button></a>
            </div>
            {/* planning */}
            {/* Signup */}
            <div className="col-md-6 ps-5" style={{alignContent:"center"}}>
                <h1 style={{fontSize:"3rem"}}><b>Don't forget! One <br /> plan, all devices</b></h1>
                <p className='fs-5 text-secondary'>The CookBook web app has all of the same incredible <br />
                features as our mobile and tablet app. Access it <br />
                anywhere with a modern internet browser!</p>
                <a href="https://app.cookbookmanager.com/" target='blank'><button className="button-84 " style={{justifyContent:"center"}} role="button">SIGN UP</button></a>
            </div>
            <div className="col-md-6">
                <img src={signup} alt="photo" width="100%" height="450px" />
            </div>
            {/* Signup */}
        </div>
    </div>
    
    
    
    
    </>
  )
}

export default App