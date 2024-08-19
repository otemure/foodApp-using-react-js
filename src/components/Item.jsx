import styles from "./cssModules/itemContainer.module.css";
export default function Item({ item, index }) {
  return (
    <div>
      <div key={index} className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
            alt={item.name}
          />
        </div>
        <div className={styles.nameContainer}>
          <h3 className={styles.name}>{item.name}</h3>
          <div className={styles.amount}>
            {item.amount}
            {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
