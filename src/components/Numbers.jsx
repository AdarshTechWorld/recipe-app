import React from 'react'

function Numbers() {
  return (
    <>
        <div className="container mt-5 mb-5">
            <div className="row marmain">
                <div className="col-md-4" style={{textAlign:"center"}}>
                    <h1 style={{fontSize:"5rem"}}><b>6.5 M</b></h1>
                    <h3><b>User Recipes Added</b></h3>
                </div>
                <div className="col-md-4" style={{textAlign:"center"}}>
                    <h1 style={{fontSize:"5rem"}}><b>70 M</b></h1>
                    <h3><b>Indrigents Added</b></h3>
                </div>
                <div className="col-md-4" style={{textAlign:"center"}}>
                    <h1 style={{fontSize:"5rem"}}><b>1.3 M</b></h1>
                    <h3><b>Meals Planned</b></h3>
                </div>
            </div>
        </div>    
    </>
  )
}

export default Numbers