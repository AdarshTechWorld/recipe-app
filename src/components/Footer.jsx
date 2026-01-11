import React from 'react'
import instra from "../assets/Instragram.png"
import face from "../assets/Facebook.png"
import Ytube from "../assets/youtube.png"
import appstore from "../assets/appstore.png" 
import playstore from "../assets/playstore1.png" 
import webapp from "../assets/webapp.png" 
import chorme from "../assets/chorome.png" 
function Footer() {
  return (
    <>
    <div className="container-fluid  brown" >
    {/* Features */}
        <div className="row px-5 py-3 text-light ">
            <div className="col-md-6 mt-5 ">
                    <h3 className='text-light '>CookBook</h3>
                    <br />
                    <p className='text-light ' >The CookBook App is brought to you by CookBook Co. Pty Ltd.</p>
                    <br />
                    <div className="row">
                      <div className="col-md-2 photo mx-3">
                        <a href="https://www.facebook.com/CookBookManager" target='blank'><img src={face} alt="photo" width="33px" height="28px" className='mt-2 pe-2'  /></a>
                      </div>
                      <div className="col-md-2 photo mx-3">
                        <a href="https://youtu.be/tKH1f9T61lI" target='blank'><img src={Ytube} alt="photo" width="30px" height="20px" className='mt-3 pe-1'/></a>
                      </div>
                      <div className="col-md-2 photo mx-3">
                        <a href="https://www.instagram.com/cookbookmanager/" target='blank'><img src={instra} alt="photo" width="36px" height="35px" className='mt-2 pe-2'/></a>
                      </div>
                    </div>
            </div>

            <div className="col-md-2 mt-5">
                <h5>Features</h5>
                <br />
                <p className='lh-lg textblue' >
                  Get Startedbr <br />
                  Add & Import <br />
                  Organise & Search <br />
                  Plan, Shop, Cook <br />
                  Web App
                </p>
            </div>
            <div className="col-md-2 mt-5">
                <h5>More</h5>
                <br />
                <p className='lh-lg textblue'>FAQ <br />
                  Pricing <br />
                  App Comparisons <br />
                  Bulk Importer <br />
                  Preview Video
                </p>
            </div>
            <div className="col-md-2 mt-5 ">
                <h5>CookBook Co.</h5>
                <br />
                <p className='lh-lg textblue'>
                About <br />
                Contact Us <br />
                Roadmap <br />
                Ideas <br />
                </p>
            </div>
            
        </div>
    {/* Features */}
    {/* Download */}
      <div className="container margin">
        <div className="row mt-5">
          <div className="col-md-3">
            <a href="https://apps.apple.com/au/app/cookbook-recipe-manager/id1073341917"><img src={appstore} alt="photo" width="200px" height="70px"/></a>
          </div>
          <div className="col-md-3">
          <a href="https://play.google.com/store/apps/details?id=com.cookbook.cbapp"><img src={playstore} alt="photo"  width="200px" height="70px"/></a>
          </div>
          <div className="col-md-3">
          <a href="https://app.cookbookmanager.com/"><img src={webapp} alt="photo"  width="200px" height="70px"/></a>

          </div>
          <div className="col-md-3">
          <a href="https://chromewebstore.google.com/detail/cookbook-manager-recipe-i/pehlnokhmjhnlghjkjbepjimjbcnjnlb?hl=en-GB"><img src={chorme} alt="photo"  width="200px" height="70px"/></a>
          </div>
        </div>
      </div>
    {/* Download */}
    {/* About */}
      <div className="container-fluid px-5 text-light-emphasis mt-2 ">
        <div className="row ">
          <div className="col-md-6 mt-5 mb-5">
            <p className='textwhite'>© 2024 CookBook Co. Pty Ltd</p>
          </div>
          <div className="col-md-6 mt-5  ">
              <div className="container ">
              <div className="row justify-content-end">
                <div className="col-md-2">
                  <a href="https://www.cookbook.company/policies/cookies" className='link-underline link-underline-opacity-0 text-secondary' target='blank'><p className='textwhite' >Cookies</p></a>
                </div>
                <div className="col-md-2">
                  <a href="https://www.cookbook.company/policies/terms" className='link-underline link-underline-opacity-0 text-secondary' target='blank'><p className='textwhite'>Terms</p></a>
                </div>
                <div className="col-md-2">
                  <a href="https://www.cookbook.company/policies/privacy" className='link-underline link-underline-opacity-0 text-secondary' target='blank'><p className='textwhite'>Privacy</p></a>
                </div>
              </div>
              </div>
          </div>
        </div>
        
        
      </div>
    {/* About */}
    </div>
    </>
  )
}

export default Footer