import React from 'react';
import chop from "./image/Bchop.png";
import { Link } from 'react-router-dom'
function Banner() {
  return (
    <>
      
      <div className="container ">

      <div className="Bchop " >
        <h1 className='fs-4'>Try now</h1>
        <h1 className='fs-1'><b>Try CookBook for free</b></h1>
        <Link to="/start" className="button-72">Get Started</Link>
        </div>
      
      </div>
      
      
        
      
    </>
  );
}


export default Banner;