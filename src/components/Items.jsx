import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Items() {
  const[items,setItems]=useState([])

  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then(res=>{
        setItems(res.data.meals)
      })
      .catch(err=>{
        console.log(err)
      })
  },[]);

  const list=items.map(item=>{return(
    <div className="card  " key= {item.idMeal}>
    <img src={item.strMealThumb} className="card-img-top" alt="photo"/>
    <div className="card-body">
      <h5 className="card-title">{item.strMeal}</h5>
      <button  type="button" className="btn btn-warning">
      <Link to={`/recipe/${item.idMeal}`} className="card-link link-offset-2 link-underline link-underline-opacity-0 ">Recipe</Link></button>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{item.strCategory}</li>
      <li className="list-group-item">{item.strArea}</li>
      
    </ul>
    <div className="card-body">
      <Link to={item.strYoutube} target='_blank' className="card-link">RecipeVideo</Link>
      
    </div>
  </div>
  )})
  return (
    <>

      <div className="container mt-2  ">
        <div className="col-3-xl col-6-md col-12-sm ">
          <div className="row row-cols-1 row-cols-md-3 g-5  ">
            {list}
          </div>
        </div>
      </div>

    
    
    </>
  )
}

export default Items