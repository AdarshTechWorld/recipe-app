import React from 'react'
import edit from './image/edit.png'
import scale from './image/scale.png'
import convert from './image/convert.png'
import fav from './image/fav.png'
import rate from './image/rate.png'
import multi from './image/multi.png'
function Tools() {
  return (
    <>
        <div className="container martop" style={{marginBottom:"100px"}}>
            <div className="text text-center">
                <h4 className='fst-italic text-info'>Tools</h4>
                <h1 style={{fontSize:"2.6rem"}}><b>Edit & customise</b></h1>
                <p className='fs-5 text-secondary'>Here are a few of our top tools for customising your CookBook</p>
            </div>
            <br />
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card" >
                        <img src={edit} className="card-img-top" alt="photo"/>
                        <div className="card-body">
                            <h4 className="card-title text-center"><b>Edit Recipes</b></h4>
                            <p className="card-text fs-5 text-secondary ">Edit your recipes to suit you, your <br /> tastes and dietary needs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card "  >
                        <img src={scale} className="card-img-top" alt="photo"/>
                        <div className="card-body">
                            <h4 className="card-title text-center"><b>Scale</b></h4>
                            <p className="card-text fs-5 text-secondary  ">More mouths to feed? Scale recipes up or down to adjust to ingredients.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card "  >
                        <img src={convert} className="card-img-top" alt="photo"/>
                        <div className="card-body">
                            <h4 className="card-title text-center"><b>Convert</b></h4>
                            <p className="card-text fs-5 text-secondary  ">Seamlessly convert ingredients to US, Imperial or Metric measures.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card "  >
                        <img src={fav} className="card-img-top" alt="photo"/>
                        <div className="card-body">
                            <h4 className="card-title text-center"><b>Favourite</b></h4>
                            <p className="card-text fs-5 text-secondary  ">Save a fave and get to them quickly when you need to hit that craving.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card "  >
                        <img src={rate} className="card-img-top" alt="photo"/>
                        <div className="card-body">
                            <h4 className="card-title text-center"><b>Rating</b></h4>
                            <p className="card-text fs-5 text-secondary  "> Rate your recipes and see how others rate them too.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card "  >
                        <img src={multi} className="card-img-top" alt="photo"/>
                        <div className="card-body">
                            <h4 className="card-title text-center"><b>Multiple photos</b></h4>
                            <p className="card-text fs-5 text-secondary  ">Add photos to each recipe step to create visual directions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    
    
    </>
  )
}

export default Tools