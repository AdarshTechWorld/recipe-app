import React, { useEffect, useState } from 'react'
import image from "../assets/recipe.jpg"
import logo from "../assets/Applogo.png"
import { Link } from 'react-router-dom'
import Items from './Items'
import Banner from './Banner'
import axios from 'axios'
import { useParams } from 'react-router-dom';
function Header() {
  const[find,setFind]=useState()
  
  // useEffect(()=>{
  //   if (find){
  //   axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${find}`)
  //   .then(res=>{
  //     setFind(res.data.meals)
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   });
  // }
  // },[find]);


  // const handle=(e)=>{
  //   e.preventDafult();
  //   axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${find}`)
  //   .then(res=>{
  //     setFind(res.data.meals)
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   });
  // }

  
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light fixed-top"   >
        <div className="container-fluid mx-2 " >
          <img src={logo} alt="photo" height="80Px" width="16%" className='p-2 ' />
          {/* <Link className="navbar-brand ms-3" to="./">My Recipies</Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-start   " style={{alignItems:"center",justifyItems:"center" }} id="navbarSupportedContent">
            <ul className="navbar-nav mx-5  mb-lg-0 " style={{alignItems:"center",gap:"40px"}}>
              {/* home */}
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle icons" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  HOME
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item HoBlue fw-medium" to="./">HOME</Link></li>
                  <li><Link className="dropdown-item HoBlue fw-medium" to="start">GET STARTED</Link></li>
                </ul>
              </li>
              {/* home */}
              {/* Features */}
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle icons" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  FEATURES
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item HoBlue fw-medium" to="import">ADD & IMPORT</Link></li>
                  <li><Link className="dropdown-item HoBlue fw-medium" to="organise">ORGANISE & SEARCH</Link></li>
                  <li><Link className="dropdown-item HoBlue fw-medium" to="plan">PLAN,SHOP & COOK</Link></li>
                  <li><Link className="dropdown-item HoBlue fw-medium" to="web">WEB APP</Link></li>
                  <li><Link className="dropdown-item HoBlue fw-medium" to="video">VIDEO</Link></li>
                </ul>
              </li>
              {/* Features */}
              {/* Pricing */}
              <li className="nav-item">
                <Link className="nav-link  icons" aria-current="page" to="price">PRICING</Link>
              </li>
              {/* Pricing */}
              {/* More */}
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle icons" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MORE
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item HoBlue fw-medium" to="compare">ADD COMPARISONS</Link></li>
                  <li><Link className="dropdown-item HoBlue fw-medium" to="https://help.cookbookmanager.com/hc/en-gb" target='blank'>FAQ</Link></li>
                  <li><Link className="dropdown-item HoBlue fw-medium" to="https://roadmap.cookbookmanager.com/cookbook" target='blank'>ROAD MAP</Link></li>
                  <li><Link className="dropdown-item HoBlue fw-medium" to="https://roadmap.cookbookmanager.com/cookbook#/ideas" target='blank'>IDEAS</Link></li>
                  <li><Link className="dropdown-item HoBlue fw-medium" to="https://app.cookbookmanager.com/" target='blank'>BULK IMPORTER</Link></li>
                  <li><Link className="dropdown-item HoBlue fw-medium" to="contact">CONTACT US</Link></li>
                </ul>
              </li>
              {/* More */}
            </ul>
            
          
          </div>
          <button  type="button" className="Button btn btn-warning justify-content-end px-3" >
          <Link to="/start" className="card-link link-offset-2 link-underline link-underline-opacity-0  " style={{color:"white"}} >Get Started</Link></button>
              
        </div>
      </nav> 
      
    </>
  )
}
export default Header
