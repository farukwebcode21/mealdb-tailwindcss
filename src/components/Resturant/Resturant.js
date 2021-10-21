import React from 'react'
import { Link } from 'react-router-dom';

const Resturant = (props) => {
    // console.log(props);
     const {idMeal, strMealThumb, strMeal, strInstructions } = props.meal;
   

    return (
        <div className="justify-center p-2 shadow-2xl">
            <img className="rounded-t-md" src={strMealThumb} alt=""/>
            <h1 className="text-2xl mx-2">{strMeal}</h1>
            <p>{strInstructions.slice(0, 200)}</p>
            <p>{idMeal}</p>
            <Link to={`/detail/${idMeal}`}className="bg-green-700 text-lg text-white rounded-md w-40 mt-5 p-2 border-separate border-red-600">Details</Link>
        </div>
    )
}

export default Resturant
