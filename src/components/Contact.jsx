import React from 'react'
import contact from "../assets/contact.png"
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <>
        <div className="mt-5"  >
            <div className="pine">
              <img src={contact} alt="contact" width="100%" height="900px" />
            </div>
            <div className="contact">
              <div className="text">
                <h1 ><b>Contact Us</b></h1>
                <p>Check our <a href="https://help.cookbookmanager.com/hc/en-gb" className='text-success'>FAQ</a> for helpful tutorials, tips & tricks.</p>
                <p>To get in touch, <Link to="/contact" className='text-black'>tap on the 'Help' widget </Link> below or email us directly <a href="#" className='text-success'> team@cookbookmanager.com</a></p>
              </div>
            </div>
        </div>
    </>
  )
}

export default Contact