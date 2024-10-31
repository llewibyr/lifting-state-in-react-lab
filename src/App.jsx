import { useState } from 'react'
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack'

// src/App.jsx

import './App.css';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack((prevStack) => [...prevStack, ingredient]);
  };

  const removeFromBurger = (ingredientToRemove) =>{
    setStack((prevStack) => prevStack.filter(ingredient => ingredient.name !== ingredientToRemove.name));
  };
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList addToBurger={addToBurger}/>
      <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};


export default App
