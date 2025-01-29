import React, { useContext } from "react";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import  CartContext from "../store/CartContext";

const backendUrl = "http://localhost:3000/";

const MealItem = ({ meal }) => {
  const { addItem } = useContext(CartContext);
  return (
    <li className="meal-item">
      <article>
        <img src={`${backendUrl}${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => addItem(meal)}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
