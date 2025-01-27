import React, { useEffect, useState } from "react";
import MealItem from './MealItem'

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          console.log(response);
        }

        const meals = await response.json();
        setLoadedMeals(meals);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem meal={meal} key={meal.id}/>;
      })}
    </ul>
  );
};

export default Meals;
