import React, { useEffect, useState } from 'react'
import Resturant from './Resturant/Resturant';

const Home = (props) => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    // console.log(meals);

    const handleSearchText =(e) =>{
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    useEffect(() =>{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data =>setMeals(data.meals));
    },[searchText])

    return (
        <>
        <div className="mt-11 mb-20 justify-center flex">
           <input onChange={handleSearchText} className="p-2 rounded border text-2xl border-indigo-800 form-input block w-1/4" type="text" placeholder="Search meal"/>
        </div>
        <div className="mx-4 grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {
                meals.map(meal => <Resturant key={meal.idMeal} meal={meal}/>)
            }
        </div>
    
        </> 
    )
}

export default Home
