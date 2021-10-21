import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router'

const Details = () => {
    const {details} = useParams();
    const [mealDetail, setMealDetail] = useState({});
    useEffect (() =>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`;
        fetch(url)
         .then(res => res.json())
         .then(data =>setMealDetail(data));
    },[])
    console.log(mealDetail);

    return (
        <div>
            <p>This is Details</p>
        </div>
    )
}

export default Details
