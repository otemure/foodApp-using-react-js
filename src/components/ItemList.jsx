import Item from "./Item";
export default function ItemList({ food, index }) {
  return (
    <div>
      {food.extendedIngredients && food.extendedIngredients.length > 0 ? (
        food.extendedIngredients.map((item, index) => (
          <Item key={item.id || index} item={item} index={index} />
        ))
      ) : (
        <p>No ingredients available</p>
      )}
    </div>
  );
}
