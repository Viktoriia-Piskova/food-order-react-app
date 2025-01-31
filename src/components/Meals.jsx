import React from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const reqConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", reqConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title={"Failed to fetch meals"} message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem meal={meal} key={meal.id} />;
      })}
    </ul>
  );
};

export default Meals;
