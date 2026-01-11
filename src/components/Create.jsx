import React from 'react'
import sign from '../assets/sign.png'
import down from '../assets/down.png'
import play from '../assets/play.png'
import login from '../assets/login.png'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
// import one from '../assets/one.png'
function Create() {
  return (
    <>
        <div className="container" style={{marginBottom:"100px"}}>
            {/* signup */}
            <div className="row mt-5">
                <div className="col-md-6 text-center" style={{alignContent:"center"}}>
                    <h1 style={{fontSize:"3rem"}}><b>Create a CookBook <br /> account</b></h1>
                    <p className='fs-5 text-secondary'>Sign up to CookBook and give it a go for free with up to 20 recipes & 5 recipe photo scans.</p>
                    <p className='fs-5 text-secondary'>Your recipes will be saved safely and securely in our Cloud Kitchen, ready to sync across all of your devices!</p>
                    <a href="https://app.cookbookmanager.com/"><button className="button-1"  role="button">SIGN UP</button></a>
                </div>
                <div className="col-md-6" style={{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                    <img src={sign} alt="photo" className='sign' width="430px" height="430px" />
                    <div className="div">
                        <img src={one} alt="photo" style={{position:"absolute",bottom:"330px",right:"400px"}} width="90px" height="100px" />
                    </div>
                </div>
            </div>
            {/* download */}
            <div className="row mt-5">
                <div className="col-md-6" style={{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                    <img src={down} alt="photo" className='sign' width="430px" height="430px" />
                    <div className="div">
                        <img src={two} alt="photo" style={{position:"absolute",bottom:"330px",right:"400px"}} width="90px" height="90px" />
                    </div>
                </div>
                <div className="col-md-6 text-center" style={{alignContent:"center"}}>
                    <h1 style={{fontSize:"3rem"}}><b>Download App - <br /> Apple iOS</b></h1>
                    <p className='fs-5 text-secondary'>Access your recipe collection on-the-go by <br /> downloading the CookBook app from the Apple App <br /> Store to all of your Apple iOS devices, including iPhone <br /> and iPad. Take your recipes with you wherever you go.</p>
                    <a href="https://apps.apple.com/us/app/cookbook-recipe-manager/id1073341917"><button className="button-1"  role="button">DOWNLOAD</button></a>
                </div>
                
            </div>
            {/* playstore */}
            <div className="row mt-5">
                <div className="col-md-6 text-center" style={{alignContent:"center"}}>
                    <h1 style={{fontSize:"3rem"}}><b>Download App - <br /> Android</b></h1>
                    <p className='fs-5 text-secondary'>Never be without your go-to recipes again by 
                        <br />downloading the CookBook app from the Google Play 
                        <br /> Store to your Android device. Whether you're at home 
                        <br /> or on the move, our app makes it easy to access your 
                        <br /> collection and keep your favourite recipes within reach.</p>
                    <a href="https://play.google.com/store/apps/details?id=com.cookbook.cbapp"><button className="button-1"  role="button">SIGN UP</button></a>
                </div>
                <div className="col-md-6" style={{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                    <img src={play} alt="photo" className='sign' width="430px" height="430px" />
                    <div className="div">
                        <img src={three} alt="photo" style={{position:"absolute",bottom:"330px",right:"400px"}} width="90px" height="90px" />
                    </div>
                </div>
            </div>
            {/* Login */}
            <div className="row mt-5">
                <div className="col-md-6" style={{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                    <img src={login} alt="photo" className='sign' width="430px" height="430px" />
                    <div className="div">
                        <img src={four} alt="photo" style={{position:"absolute",bottom:"330px",right:"400px"}} width="90px" height="90px" />
                    </div>
                </div>
                <div className="col-md-6 text-center" style={{alignContent:"center"}}>
                    <h1 style={{fontSize:"3rem"}}><b>Bookmark the Web <br />App</b></h1>
                    <p className='fs-5 text-secondary'>Experience ultimate convenience with the fully-featured <br /> CookBook Web App, accessible on any laptop,
                    <br /> computer, or device with a browser. Enjoy optimised 
                    <br /> large screen layouts for maximum recipe organisation!</p>
                    <a href="https://apps.apple.com/us/app/cookbook-recipe-manager/id1073341917"><button className="button-1"  role="button">LOGIN</button></a>
                </div>
                
            </div>
        </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Create