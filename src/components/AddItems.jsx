import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'
function AddItems() {

  const[items,setItems]=useState({strMeal:"",strArea:"",strCategory:"",strYoutube:"",strMealThumb:"",
    strIngredient1:"",strIngredient2:"",strIngredient3:"",strIngredient4:"",strIngredient5:"",strIngredient6:"",
    strMeasure1:"",strMeasure2:"",strMeasure3:"",strMeasure4:"",strMeasure5:"",strMeasure6:"",
    strInstruction:""
  })

  const navigate=useNavigate()

  const insert=(e)=>{
    e.preventDefault()
    axios.post(`https://www.themealdb.com/api/json/v1/1/search.php?s`,items)
    navigate('./')
  }

  return (
    <>
      <div className="container ">
        <h1 style={{textAlign:"center"}}>Adding Items</h1>        
          <div className="row">
            
            <div className='col-md-6  ' >
                {/* Add Name of Dish */}
                <form onSubmit={insert}>
                <h1>Required Information</h1>
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h3>Name:</h3>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Name Of Dish'
                    value={items.strMeal}
                    onChange={(e)=>setItems({...items,strMeal:e.target.value})}
                    />
                  </div>
                </div>

                {/* Area */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h3>Area:</h3>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='eg Japanese'
                    value={items.strArea}
                    onChange={(e)=>setItems({...items,strArea:e.target.value})}
                    />
                  </div>
                </div>

                {/* category */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h3>Category:</h3>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='eg SeaFood'
                    value={items.strCategory}
                    onChange={(e)=>setItems({...items,strCategory:e.target.value})}
                    />
                  </div>
                </div>

                {/* Youtube */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h3>Youtube:</h3>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Video link'
                    value={items.strYoutube}
                    onChange={(e)=>setItems({...items,strYoutube:e.target.value})}
                    />
                  </div>
                </div>

                {/* MealThumb */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h3>ImageLink:</h3>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Image Link'
                    value={items.strMealThumb}
                    onChange={(e)=>setItems({...items,strMealThumb:e.target.value})}
                    />
                  </div>
                </div>
                <hr />

                {/* Ingredient */}
                <h1>Add Ingredient</h1>
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h4>Ingredient1:</h4>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Ingredient1'
                    value={items.strIngredient1}
                    onChange={(e)=>setItems({...items,strIngredient1:e.target.value})}
                    />
                  </div>
                </div>
                {/* space */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h4>Ingredient2:</h4>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Ingredient2'
                    value={items.strIngredient2}
                    onChange={(e)=>setItems({...items,strIngredient2:e.target.value})}
                    />
                  </div>
                </div>
                {/* space */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h4>Ingredient3:</h4>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Ingredient3'
                    value={items.strIngredient3}
                    onChange={(e)=>setItems({...items,strIngredient3:e.target.value})}
                    />
                  </div>
                </div>
                {/* space */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h4>Ingredient4:</h4>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Ingredient4'
                    value={items.strIngredient4}
                    onChange={(e)=>setItems({...items,strIngredient4:e.target.value})}
                    />
                  </div>
                </div>
                {/* space */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h4>Ingredient5:</h4>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Ingredient5'
                    value={items.strIngredient5}
                    onChange={(e)=>setItems({...items,strIngredient5:e.target.value})}
                    />
                  </div>
                </div>
                {/* space */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h4>Ingredient6:</h4>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Ingredient6'
                    value={items.strIngredient6}
                    onChange={(e)=>setItems({...items,strIngredient6:e.target.value})}
                    />
                  </div>
                </div>
                {/* Ingredient */}

                <hr />

                {/* Measure */}
                <h1>Measurements</h1>
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h4>Measure1:</h4>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Quantity'
                    value={items.strMeasure1}
                    onChange={(e)=>setItems({...items,strMeasure1:e.target.value})}
                    />
                  </div>
                </div>
                {/* space */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h4>Measure2:</h4>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Quantity'
                    value={items.strMeasure2}
                    onChange={(e)=>setItems({...items,strMeasure2:e.target.value})}
                    />
                  </div>
                </div>
                {/* space */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h4>Measure3:</h4>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Quantity'
                    value={items.strMeasure3}
                    onChange={(e)=>setItems({...items,strMeasure3:e.target.value})}
                    />
                  </div>
                </div>
                {/* space */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h4>Measure4:</h4>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Quantity'
                    value={items.strMeasure4}
                    onChange={(e)=>setItems({...items,strMeasure4:e.target.value})}
                    />
                  </div>
                </div>
                {/* space */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h4>Measure5:</h4>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Quantity'
                    value={items.strMeasure5}
                    onChange={(e)=>setItems({...items,strMeasure5:e.target.value})}
                    />
                  </div>
                </div>
                {/* space */}
                <div className="row ">
                  <div className="col-md-3" style={{textAlign:"start"}}>
                      <h4>Measure6:</h4>
                  </div>
                  <div className="col-md-9" style={{textAlign:"start"}}>
                      <input type="text" 
                    placeholder='Quantity'
                    value={items.strMeasure6}
                    onChange={(e)=>setItems({...items,strMeasure6:e.target.value})}
                    />
                  </div>
                </div>
                {/* Measure */}

                <hr />

                {/* Instructions */}
               
                    <h1>Instructions</h1>
                    <div className="row ">
                      <div className="col-md-3 align-self-center mb-4" style={{textAlign:"start"}}>
                          <h4>Instruction:</h4>
                      </div>
                      <div className="col-md-9 mb-4 align-self-center" style={{textAlign:"start"}}>
                          <textarea type="text" style={{height:"100px",width:"100%"}}
                        placeholder='Method of Preperation'
                        value={items.strInstruction}
                        onChange={(e)=>setItems({...items,strInstruction:e.target.value})}
                        />
                      </div>
                    </div>
                {/* Instructions */}
                {/* Button */}
                      <div style={{textAlign:"center"}}>
                      <button type="button" className="btn btn-warning mb-4"  style={{width:"50%"}} >Add New Item</button>
                      </div>
                {/* Button */}
                </form>
                
          
                
            </div>
            



            {/* Output  */}
          <div className='col-md-6'>
            <p>
              <div className="card mt-3" >
                  <img src={items.strMealThumb} className="card-img-top" alt="photo"/>
                  <div className="card-body">
                    <h5 className="card-title">{items.strMeal}</h5>
                    
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{items.strCategory}</li>
                    <li className="list-group-item">{items.strArea}</li>
                  </ul>
                  <div className="card-body">
                  <button  type="button" target='_blank' className="btn btn-warning"><Link to={items.strYoutube} className="card-link link-offset-2 link-underline link-underline-opacity-0 ">Recipe</Link></button>
                    
                  </div>
                </div>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddItems