import React from 'react'
import { Link } from 'react-router-dom'
function Compare() {
  return (
    <>
        <div className="container-fluid" style={{marginBottom:"50px"}}>
            <div className="text">
                <h5 className='text-success fst-italic'>Compare</h5>
                <h1><b>Personal recipe managers</b></h1>
                <p className='text-secondary'>Compare the top personal recipe managers on the market with CookBook, hover to find 
                    <br />out more</p>
            </div>
            
              <div className="Compare-price" style={{justifyItems:"center"}}>
                <table style={{width:"80%"}} >
                    <tr>
                        <th className='pb-5'><h3><b>Features</b></h3></th>
                        <th className='pb-5 text-center bg-success-subtle'><h3><b>CookBook</b></h3></th>
                        <th className='pb-5 text-center ' ><h3><b>Paprika 3</b></h3></th>
                        <th className='pb-5 text-center'><h3><b>Recipe <br />
                        Keeper</b></h3></th>
                        <th className='pb-5 text-center'><h3><b>OrganizEat</b></h3></th>
                    </tr>
                    <tbody>
                        <tr className='border-top ' style={{height:"100px"}} >
                            <td><p className='fs-5 text-secondary '>Recipe limit</p></td>
                            <td className='bg-success-subtle'><p className='fs-5 text-center   '>Unlimited</p></td>
                            <td><p className='fs-5 text-center '>Unlimited</p></td>
                            <td><p className='fs-5 text-center '>Unlimited</p></td>
                            <td><p className='fs-5 text-center '>400</p></td>   
                        </tr>
                        <tr className='border-top ' style={{height:"100px"}} >
                            <td><p className='fs-5 text-secondary mt-4'>Import, plan & shop</p></td>
                            <td className='bg-success-subtle'><p className='fs-5 text-center mt-4 bg-success-subtle'>✔️</p></td>
                            <td><p className='fs-5 text-center mt-4'>✔️</p></td>
                            <td><p className='fs-5 text-center mt-4'>✔️</p></td>
                            <td><p className='fs-5 text-center mt-4'>✔️</p></td>   
                        </tr>
                        <tr className='border-top '  style={{height:"100px"}} >
                            <td><p className='fs-5 text-secondary mt-4'>Try before you buy</p></td>
                            <td  className='bg-success-subtle' ><p className='fs-5 text-center mt-4 bg-success-subtle '>✔️</p></td>
                            <td><p className='fs-5 text-center mt-4'>❓</p></td>
                            <td><p className='fs-5 text-center mt-4'>❓</p></td>
                            <td><p className='fs-5 text-center mt-4'>✔️</p></td>   
                        </tr>
                        <tr className='border-top '  style={{height:"100px"}}>
                            <td><p className='fs-5 text-secondary mt-4'>Price (mobile + web)</p></td>
                            <td  className='bg-success-subtle'><p className='fs-5 text-center mt-4 bg-success-subtle '><b>$15.99 / year</b></p></td>
                            <td><p className='fs-5 text-center mt-4'><b>$39.97 / version</b></p></td>
                            <td><p className='fs-5 text-center mt-4'><b>$69.97/version</b></p></td>
                            <td><p className='fs-5 text-center mt-4'><b>$39.99/year</b></p></td>   
                        </tr>
                        <tr className='border-top '  style={{height:"100px"}}>
                            <td><p className='fs-5 text-secondary mt-4'>Offline recipe access</p></td>
                            <td  className='bg-success-subtle'><p className='fs-5 text-center mt-4 bg-success-subtle '><b>✔️</b></p></td>
                            <td><p className='fs-5 text-center mt-4'><b>✔️</b></p></td>
                            <td><p className='fs-5 text-center mt-4'><b>✔️</b></p></td>
                            <td><p className='fs-5 text-center mt-4'><b>✔️</b></p></td>   
                        </tr>
                        
                        <tr className='border-top '  style={{height:"100px"}}>
                            <td><p className='fs-5 text-secondary mt-4'>Recipe scanning (OCR)</p></td>
                            <td  className='bg-success-subtle'><p className='fs-5 text-center mt-4 bg-success-subtle '><b>✔️</b></p></td>
                            <td><p className='fs-5 text-center text-secondary mt-4'><b>X</b></p></td>
                            <td><p className='fs-5 text-center mt-4'><b>✔️</b></p></td>
                            <td><p className='fs-5 text-center text-secondary mt-4'><b>X</b></p></td>   
                        </tr>
                        <tr className='border-top '  style={{height:"100px"}}>
                            <td><p className='fs-5 text-secondary mt-4'>Bulk import / export</p></td>
                            <td  className='bg-success-subtle'><p className='fs-5 text-center mt-4 bg-success-subtle '><b>✔️</b></p></td>
                            <td><p className='fs-5 text-center mt-4'><b>✔️</b></p></td>
                            <td><p className='fs-5 text-center mt-4'><b>✔️</b></p></td>
                            <td><p className='fs-5 text-center text-secondary mt-4'><b>X</b></p></td>   
                        </tr>
                        
                        <tr className='border-top '  style={{height:"100px"}}>
                            <td><p className='fs-5 text-secondary mt-4'>Browser extension</p></td>
                            <td  className='bg-success-subtle'><p className='fs-5 text-center mt-4 bg-success-subtle '><b>✔️</b></p></td>
                            <td><p className='fs-5 text-center text-secondary mt-4'><b>X</b></p></td>
                            <td><p className='fs-5 text-center text-secondary mt-4'><b>X</b></p></td>
                            <td><p className='fs-5 text-center text-secondary mt-4'><b>X</b></p></td>   
                        </tr>
                        
                        <tr className='border-top '  style={{height:"100px"}}>
                            <td><p className='fs-5 text-secondary mt-4'>Cooking mode</p></td>
                            <td  className='bg-success-subtle'><p className='fs-5 text-center mt-4 bg-success-subtle '><b>✔️</b></p></td>
                            <td><p className='fs-5 text-center text-secondary mt-4'><b>X</b></p></td>
                            <td><p className='fs-5 text-center text-secondary mt-4'><b>X</b></p></td>
                            <td><p className='fs-5 text-center text-secondary mt-4'><b>X</b></p></td>   
                        </tr>
                        <tr className='border-top '  style={{height:"100px"}}>
                            <td></td>
                            <td className='text-center bg-success-subtle'>
                              <button  type="button" className="Button-start btn btn-warning   justify-content-end px-3" >
                                      <Link to="/start" className="card-link link-offset-2 link-underline link-underline-opacity-0  " 
                                      style={{color:"white"}} >Get Started</Link></button>
                            </td>            
                        </tr>
                    </tbody>
                </table>
            </div> 
            
        </div>




    </>
  )
}

export default Compare