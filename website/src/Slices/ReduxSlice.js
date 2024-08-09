import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CurrentList :[]
}

const Slice = createSlice({
    name : "Slices",
    initialState,
    reducers : {
        addToList:(state,action) => {
            state.CurrentList = action.payload
        }
    }
})
export default Slice.reducer
export const {addToList} = Slice.actions