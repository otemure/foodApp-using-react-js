import { useEffect, useState } from "react";
import styles from "./cssModules/foodDetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "6486ca5a4c224bc98262dc4c25fa20b1";

  useEffect(() => {
    async function fetchFoodDetails() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        console.log(data);
        setFood(data);
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    }

    if (foodId) {
      fetchFoodDetails();
    }
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️ {food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong>👨 serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 vegetarian " : "🥩 not vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 vegan meal" : ""}</strong>
          </span>
        </div>
        <div>
          $
          <span>
            <strong>
              {(food.pricePerServing / 100).toFixed(3)} per serving
            </strong>
          </span>
        </div>
        <h2>ingredients</h2>
        <ItemList food={food} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          {food.analyzedInstructions && food.analyzedInstructions.length > 0 ? (
            <ol>
              {food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ol>
          ) : (
            <p>No instructions available</p>
          )}
        </div>
      </div>
    </div>
  );
}
