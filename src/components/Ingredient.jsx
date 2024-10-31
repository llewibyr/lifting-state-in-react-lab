
const Ingredient = ({ ingredient, onAdd, onRemove, inStack }) => {
  return (
    <li style={{ color: ingredient.color }}>
      {ingredient.name}
      {inStack ? (
        <button onClick={() => onRemove(ingredient)}>Remove</button>
      ) : (
        <button onClick={() => onAdd(ingredient)}>Add</button>
      )}
    </li>
  );
};

export default Ingredient;
