import Ingredient from './Ingredient';

  const IngredientList = ({ addToBurger}) => {
    return (
        <ul>
            {availableIngredients.map((ingredient) => (
                <Ingredient 
                key={ingredient.name}
                ingredient={ingredient}
                onAdd={addToBurger}
                />
            ))}
        </ul>
    )
  }

  const availableIngredients = [
    {name: 'Lettuce', color: 'green'},
    {name: 'Tomato', color: 'red'},
    {name: 'Onion', color: 'purple'},
    {name: 'Cheese', color: 'yellow'},
    {name: 'Patty', color: 'brown'},
  ];

  
  export default IngredientList;
  