import { createSlice } from "@reduxjs/toolkit";





const themeSlice = createSlice({
    name : 'theme',
    initialState : true,
    reducers : {

        changeTheme : (state)=>{
             return   state= state? false : true   
        }
    }
})


export const  {changeTheme} = themeSlice.actions

export default themeSlice.reducer