import { createSlice } from "@reduxjs/toolkit";

const init = JSON.parse(localStorage.getItem('panier')) || [];


// const reducerPanier = (state = init, action) => {

//   switch (action.type) {
//     case 'ADD.TO.PANIER':
//       if (!state.includes(action.item)) {
//         localStorage.setItem('panier', JSON.stringify([...state, action.item]));
//         return ([...state, action.item]);
//       }
//       return (state)
//     case 'REMPOVE.FROM.PAIER':
//       localStorage.setItem('panier', JSON.stringify(state.filter(i => i !== action.item)));
//       return (state.filter(i => i !== action.item));

//   }
//   return state
// }

// export default reducerPanier;

const PanierSlice = createSlice({
  name: 'Panier',
  initialState: init,
  reducers:
  {
    addToPanier: (state, action) => {
      if (!state.includes(action.payload)) {
        localStorage.setItem('panier', JSON.stringify([...state, action.payload]));
        return ([...state, action.payload]);
      }
 
    },
    removeFromPanier : (state,action)=>{
      localStorage.setItem('panier', JSON.stringify(state.filter(i => i !== action.payload)));
      return (state.filter(i => i !== action.payload));
    }  
  }
})
export const {addToPanier,removeFromPanier}=PanierSlice.actions;
export default PanierSlice.reducer
