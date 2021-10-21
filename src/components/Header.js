import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => {
    const [searchText, setsearchText] = useState('');
    const [meals, setMeals] = useState([]);
    
    const handleSearchField =(e) =>{
        const searchTextValue = e.target.value;
        setsearchText(searchTextValue);
    }
    useEffect(() =>{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setMeals(data.meals));
    },[searchText])

    return (
        <div>
             <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                             <div className="hidden md:flex items-center space-x-2 py-5 uppercase">
                                <NavLink to="/home" className="text-2xl px-2 text-green-500  border-green-500">Home</NavLink>
                                {/* <NavLink to="/detail" className="text-2xl px-3 text-gray-500 hover:text-green-500 transition duration-500">Detail</NavLink> */}
                                <NavLink to="/service" className="text-2xl  px-2 text-gray-500  hover:text-green-500 transition duration-300">Services</NavLink>
                                <NavLink to="/about" className="text-2xl px-2 text-gray-500  hover:text-green-500 transition duration-300">About</NavLink>
                                <NavLink to="/contact" className="text-2xl px-2 text-gray-500 f hover:text-green-500 transition duration-300">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> 
        </div>
    )
}

export default Header
