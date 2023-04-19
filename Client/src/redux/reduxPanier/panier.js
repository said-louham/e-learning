import React from 'react';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addToPanier,removeFromPanier } from './action';



export default function Panier() {
    const panier = useSelector(state => state.reducerPanier)
    const dispatch = useDispatch()
    
    console.log(panier)


  const addTopanier = item => {
    dispatch(addToPanier(item))
   
  };


  const removeFrompanier = item => {
    dispatch(removeFromPanier(item))

  };



  return (
    <div className="App">
      <h1>My React App</h1>
      <ul>
        {panier?.map(item => (
          <li key={item}>
            {item}
            <button onClick={() => removeFrompanier(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTopanier('item1')}>Add Item 1</button>
      <button onClick={() => addTopanier('item2')}>Add Item 2</button>
    </div>
  );
}
