




import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpen: false
}


const Modelslice = createSlice({
    name: "modal",
    initialState,
    reducers: {


        handlmodal : (state , action)=> {

            state.isOpen = !state.isOpen
        }
    }

})

console.log(Modelslice)

export default Modelslice.reducer
export const {handlmodal} = Modelslice.actions