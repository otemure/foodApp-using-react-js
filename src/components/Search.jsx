import { useEffect, useState } from "react";
import styles from "./cssModules/search.module.css";
const url = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "6486ca5a4c224bc98262dc4c25fa20b1";

export default function Search({ foodData, setFoodData }) {
  const [query, searchQuery] = useState("");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }

    fetchFood();
  }, [query, setFoodData]);

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => searchQuery(e.target.value)}
        type="text"
        placeholder="search recipe"
      />
      {/* <button>Search</button> */}
    </div>
  );
}
