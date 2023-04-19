const { createSlice } = require("@reduxjs/toolkit");

const theme = localStorage.getItem('theme') || 'light';


// const reducerThemeMode = (state = theme, action) => {


//     switch (action.type) {
//         case 'SwitchThema':
//             if (state === 'dark') {
//                 state = 'light';
//             } else {
//                 state = 'dark';
//             }
//             localStorage.setItem('theme', state)
//     }
//     return state
// }

// export default reducerThemeMode;
const reducerThemeMode = createSlice({
    name: 'theme',
    initialState: theme,
    reducers: {
        SwitchThema: (state) => {
            console.log('f',state)
            if (state === 'dark') {
                state = 'light';
            } else {
                state = 'dark';
            }
            localStorage.setItem('theme', state)
            return state
        }

    }
})
export const {SwitchThema}=reducerThemeMode.actions;
export default reducerThemeMode.reducer
