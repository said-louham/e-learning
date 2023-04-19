import pic from '../../imgs/card/dev.jpg'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux"
// import store from '../store';

// const Courses=store.getState().Courses
// console.log('ggg',Courses)
// const Courses = useSelector(state => state.Courses)

// const initialState = {
//   products: Courses,
//   filteredProducts: [],
// };
const initialState = {
 
  


    products: [
        { id: 1, title: 'design Course for Beginners', categorie: 'Design', price: 120, users: 3800, img: pic },
        { id: 2, title: 'design Course for Beginners', categorie: 'Design', price: 88, users: 3800, img: pic },
        { id: 3, title: 'EditingVideo Course for Beginners', categorie: 'Business', price: 90, users: 3800, img: pic },
        { id: 4, title: 'design Course for Beginners', categorie: 'Design', price: 120, users: 3800, img: pic },
        { id: 5, title: 'Developement Course for Beginners', categorie: 'Development', price: 10, users: 3800, img: pic },
        { id: 6, title: 'EditingVideo Course for Beginners', categorie: 'Business', price: 120, users: 3800, img: pic },
        { id: 7, title: 'Developement Course for Beginners', categorie: 'Development', price: 200, users: 3800, img: pic },
        { id: 8, title: 'Marketing Course for Beginners', categorie: 'Marketing', price: 120, users: 3800, img: pic },
        { id: 9, title: 'design Course for Beginners', categorie: 'Management', price: 120, users: 3800, img: pic },
        { id: 10, title: 'Developement Course for Beginners', categorie: 'Development', price: 120, users: 3800, img: pic },
        { id: 11, title: 'Marketing Course for Beginners', categorie: 'Marketing', price: 120, users: 3800, img: pic },
        { id: 12, title: 'EditingVideo Course for Beginners', categorie: 'Business', price: 120, users: 3800, img: pic },
        { id: 13, title: 'Developement Course for Beginners', categorie: 'Development', price: 120, users: 3800, img: pic },
        { id: 14, title: 'design Course for Beginners', categorie: 'Management', price: 120, users: 3800, img: pic },
        { id: 15, title: 'Developement Course for Beginners', categorie: 'Development', price: 120, users: 3800, img: pic },
        { id: 16, title: 'Marketing Course for Beginners', categorie: 'Marketing', price: 120, users: 3800, img: pic },
        { id: 17, title: 'EditingVideo Course for Beginners', categorie: 'Business', price: 120, users: 3800, img: pic },
    ],
    filteredProducts: [],
}



const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
      search: (state, action) => {
        const { payload } = action;
        if (!payload.price.from && payload.categ.length) {
          state.filteredProducts = state.products.filter(product =>
            payload.categ.includes(product.categorie)
          );
        } 
        else if (payload.categ.length > 0 && payload.price) {
          state.filteredProducts = state.products.filter(product => {
            return (
              payload.categ.includes(product.categorie) &&
              product.price >= payload.price.from &&
              product.price <= payload.price.to
            );
          });
        } else if (payload.price && !payload.categ.length) {
          state.filteredProducts = state.products.filter(product =>
            product.price >= payload.price.from &&
            product.price <= payload.price.to
          );
        } else {
          state.filteredProducts = null;
        }
      },
    },
  });
  
  export const { search } = productsSlice.actions;
  
  export default productsSlice.reducer;

  
// const Reducer = (state = initialState, { type, payload }) => {
//     switch (type) {

//         case 'Search':
//             if (!payload.price.from && payload.categ.length) {
//                 return {
//                     ...state,
//                     filteredProducts: state.products.filter(product =>
//                         payload.categ.includes(product.categorie)
//                     ),
//                 };
//             } else if (payload.categ.length > 0 && payload.price) {
//                 return {
//                     ...state,
//                     filteredProducts: state.products.filter(product => {
//                         return (
//                             payload.categ.includes(product.categorie) &&
//                             product.price >= payload.price.from &&
//                             product.price <= payload.price.to
//                         )
//                     }),
//                 };
//             } else if (payload.price && !payload.categ.length) {
//                 return {
//                     ...state,
//                     filteredProducts: state.products.filter(product =>
//                         product.price >= payload.price.from &&
//                         product.price <= payload.price.to
//                     ),
//                 };
//             } else{
//                 return{
//                     ...state,
//                     filteredProducts : 'is null'
//                 }
//             }






//         default:
//             return state
//     }
// }


// export default Reducer
  
