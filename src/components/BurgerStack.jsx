// `src/components/BurgerStack.jsx`

import Ingredient from './Ingredient'

const BurgerStack = ({stack, removeFromBurger}) => {
    return ( <ul>
        {stack.length === 0 ? (
            <li>No Ingredients</li>
        ) : (
            stack.map((ingredient) => (
                <Ingredient
                key={ingredient.name}
                ingredient={ingredient}
                onRemove={removeFromBurger}
                inStack={true}
                />
            ))
        )}
     </ul>
    );
  };
  
  export default BurgerStack;
  