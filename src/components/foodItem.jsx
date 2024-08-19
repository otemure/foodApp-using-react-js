import styles from "./cssModules/foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.id, food.title);
            setFoodId(food.id);
          }}
          className={styles.itemButton}
        >
          view recipe
        </button>
      </div>
    </div>
  );
}
