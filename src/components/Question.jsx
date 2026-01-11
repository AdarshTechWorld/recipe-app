import React from 'react'

function Question() {
  return (
    <>  <div className="div mt-5" style={{textAlign:"center",marginBottom:"100px"}}>
            <h4 style={{color:"green"}}>FAQ</h4>
            <h1>Frequently Asked Questions</h1>
            <div className="container margin-1 px-5" >
                    <div className="accordion center " id="accordionExample">
                        <div className="accordion-item " style={{width:"70%"}}>
                            <h2 className="accordion-header ">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <b className='disright'>How much does CookBook cost?</b>
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                            <div className="accordion-body left ">
                                CookBook is free to download and try with up to 20 recipes, 5 OCR recipe scans & 2 shopping lists, so you can try before you buy! You will need to select a plan once you've reached these limits.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item" style={{width:"70%"}}>
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <b className='disright'>Do I have to pay to use CookBook on each device?</b>
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body left">
                            No, your plan will give you unlocked access to the CookBook mobile and web app on ALL of your devices, on including iPhone, iPad, Android, tablet, computer & laptop.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item " style={{width:"70%"}}>
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <b className='disright'>With so many recipe managers out there, why CookBook?</b>
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body left">
                            CookBook stands out among recipe managers for several reasons. Our team is passionate about food and dedicated to helping people cook delicious meals. We are a small, personal team that values customer feedback and are always looking for ways to improve our app. Additionally, one of the unique features of CookBook is our recipe scanning function, which allows you to easily add recipes from your physical cookbooks or magazines to your digital collection. This is a feature not often found in other recipe management apps and is included as part of your CookBook plan.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item" style={{width:"70%"}}>
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <b className='disright'>Are my recipes public?</b>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse ">
                            <div className="accordion-body left">
                            No your recipes are not public, CookBook is your own personal portable digital recipe manager. Just like keeping a binder of recipes at home in your kitchen!
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Question