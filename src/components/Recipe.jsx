import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function Recipe() {
    const[items,setItems]=useState([]);
    const{idMeal}=useParams();

  useEffect(()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((res)=>{
        console.log(res.data)
        setItems(res.data.meals)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[idMeal]);

  
  


  return (
    <>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 bg-danger-subtle" style={{textAlign:"center"}}>
            <div className="Indri mt-2">
              <h3>Indrigents</h3>
              <hr />
              <div className="row">
                <div className="col-md-6">
                    {items.length > 0 ? (
                <>
                    <h5>{items[0].strIngredient1}</h5>
                    <h5>{items[0].strIngredient2}</h5>
                    <h5>{items[0].strIngredient3}</h5>
                    <h5>{items[0].strIngredient4}</h5>
                    <h5>{items[0].strIngredient5}</h5>
                    <h5>{items[0].strIngredient6}</h5>
                </>  
                  ) : (
                      <h1>Loading...</h1>
                  )}
                </div>
                <div className="col-md-6">
                    {items.length > 0 ? (
                <>
                    <h5>{items[0].strMeasure1}</h5>
                    <h5>{items[0].strMeasure2}</h5>
                    <h5>{items[0].strMeasure3}</h5>
                    <h5>{items[0].strMeasure4}</h5>
                    <h5>{items[0].strMeasure5}</h5>
                    <h5>{items[0].strMeasure6}</h5>
                </>  
                  ) : (
                      <h1>Loading...</h1>
                  )}
                </div>
              </div>
            </div>

            <div className="Inst">
              <h3>Instruction</h3>
              <hr />
                  {items.length > 0 ? (
                    <h5>{items[0].strInstructions}</h5>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>

            
        </div>
        <div className="col-md-6 ">
                <div className="image " >
                  
                      {items.length > 0 ? (
                      <img src={items[0].strMealThumb} alt="photo" className="img-fluid" width="100%" height="400px" />
                  ) : (
                      <h1>Loading...</h1>
                  )}
                </div>
                <div className="div mt-3" style={{textAlign:"center"}}>
                    {items.length > 0 ? (
                        <h1 className='text-uppercase' style={{fontSize:"5rem"}}>{items[0].strMeal}</h1>
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>
                <hr />
                <div className="div mt-2" style={{textAlign:"center"}}>
                {items.length > 0 ? (
                    <h1>Area:{items[0].strArea}</h1>
                ) : (
                    <h1>Loading...</h1>
                )}
                </div>
                <div className="div mb-2" style={{textAlign:"center"}}>
                {items.length > 0 ? (
                    <h1>Category:{items[0].strCategory}</h1>
                ) : (
                    <h1>Loading...</h1>
                )}
                </div>
                <hr />
                
                

        </div>
      </div>
    </div>
    </>
  )
}

export default Recipe