import React from 'react'
import mobile from "./image/mobile.png"
import web from "./image/web.png"
import chrome from "./image/chrome.png"
import link from "./image/link.png"
import bulk from "./image/bulk.png"
import file from "./image/file.png"
function Build() {
  return (
    <>
        <div className="container mt-5 ">
            {/* text */}
                <div className="text text-center">
                    <h4 className='text-success'>Build your CookBook</h4>
                    <h1 style={{fontSize:"3rem"}}><b>Importing recipes</b></h1>
                    <br />
                    <p style={{fontSize:"1.2rem"}} className='grey'>Seamlessly import and save recipes, straight to your CookBook</p>
                </div>
            {/* text */}
            {/* card */}
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card" >
                        <img src={mobile} className="card-img-top" alt="photo"/>
                        <div className="card-body">
                            <h4 className="card-title"><b>Mobile App</b></h4>
                            <p className="card-text fs-5 grey">Download the iOS or Android to save recipes straight yourn the browser or in app.</p>
                            <a href="#" className="card-link link-underline link-underline-opacity-0 link-success"><h5>Download</h5></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card" >
                        <img src={web} className="card-img-top" alt="photo"/>
                        <div className="card-body">
                            <h4 className="card-title"><b>Web App</b></h4>
                            <p className="card-text fs-5 grey">Link to see your recipeson the big screen? The web app makes recipe management easier than ever!</p>
                            <a href="#" className="card-link link-underline link-underline-opacity-0 link-success"><h5>Sign in</h5></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                <div className="card" >
                        <img src={chrome} className="card-img-top" alt="photo"/>
                        <div className="card-body ">
                            <h4 className="card-title"><b>Chrome extension</b></h4>
                            <p className="card-text fs-5 grey">Add your Google Chrome Extension add recipes quick than ever, straight to the web app.</p>
                            <a href="#" className="card-link link-underline link-underline-opacity-0 link-success"><h5>Install</h5></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" >
                        <img src={link} className="card-img-top" alt="photo"/>
                        <div className="card-body">
                            <h4 className="card-title"><b>Link</b></h4>
                            <p className="card-text fs-5 grey">Copy a linkand open CookBook. CB will askif you'd like to add recipe you've copied.</p>
                            <a href="#" className="card-link link-underline link-underline-opacity-0 link-success"><h5>Read More</h5></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card custom-card" >
                        <img src={bulk} className="card-img-top" alt="photo"/>
                        <div className="card-body">
                            <h4 className="card-title"><b>Bulk import </b></h4>
                            <p className="card-text fs-5 grey">Use CookBook's Bulk Importer to import known recipe files & formats. </p>
                            <a href="#" className=" card-link link-underline link-underline-opacity-0 link-success"><h5>Read more</h5></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card" >
                        <img src={file} className="card-img-top" alt="photo"/>
                        <div className="card-body ">
                            <h4 className="card-title"><b>File import</b></h4>
                            <p className="card-text fs-5 grey">Just perfected a recipe your friends will love? share the tastiness by sending a CB file for import.</p>
                            <a href="#" className="card-link link-underline link-underline-opacity-0 link-success"><h5>Read more</h5></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* card */}
        </div>
    </>
  )
}

export default Build