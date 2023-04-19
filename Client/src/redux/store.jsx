import { configureStore } from "@reduxjs/toolkit";
import Panier from "./reducers/reducerPanier"
import theme from "./reducers/themeModeReducer"
import AuthSlice from "./reducers/AuthSlice";
import dbSlice from "./reducers/dbReducer"
import CoursesSlice from "./reducers/CoursesSlice"
import FavoriteSlice from "./reducers/favoriteSlice"
import productsSlice from "./reducers/Reducer"
import SearchSlice from './reducers/SearchSlice'
import UsersSlice from './reducers/users'
import CommentsSlice from './reducers/CommentSlice'
import users from './reducers/UsersSlice'
import RatingSlice from "./reducers/RatingSlice";
import CommandSlice from "./reducers/commandSlice";
const store = configureStore({
  reducer: {
    panier: Panier,
    theme,
    Auth:AuthSlice,
    dbSlice,
    Courses:CoursesSlice,
    productsSlice,
    search:SearchSlice,
    UsersSlice,
    favorite:FavoriteSlice,
    comment:CommentsSlice,
    users,
    Rate:RatingSlice,
    command:CommandSlice,
  },
    // check this next
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck:false
        }),
  
});

export default store;