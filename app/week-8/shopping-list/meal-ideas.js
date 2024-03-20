"use client";
import React, { useState, useEffect } from 'react';
import ItemsData from './items-Data';

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealIdeas = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        const fetchedMeals = data.meals || [];
        setMeals(fetchedMeals);
      } catch (error) {
        console.error('Error fetching meal ideas:', error);
      }
    };

    if (ingredient) {
      fetchMealIdeas();
    } else {
      setMeals([]);
    }
  }, [ingredient]);

  const mapObjectToArray = (obj) => {
    return Object.keys(obj).map((key) => obj[key]);
  };

  return (
    
    <div className="p-5" >
  
      <h2 className="text-2xl font-bold p-5 text-black">Meal Ideas</h2>
      <div>
        {meals.length > 0 ? (
          <div>
            <p className=" mb-2 w-60 h-10 bg-zinc-300 border-2 border-black-300 rounded-md hover:bg--200">Meal ideas for {ingredient}:</p>
            <ul>
              {mapObjectToArray(meals).map((meal) => (
                <li key={meal.idMeal} className=" mb-2 w-80 h-auto bg-zinc-100 border-2 border-black-200 rounded-md hover:bg--200">{meal.strMeal}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No meal ideas found for {ingredient}.</p>
        )}
      </div>
    </div>
  );
}

export default MealIdeas;
