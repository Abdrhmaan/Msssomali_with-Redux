import { configureStore } from "@reduxjs/toolkit";
import Modelslice from "./Feutares/model/Modelslice";
import competitorReducer from "./Feutares/compatetar/CompatetarSlice";



export const store = configureStore({
    reducer : {
        competitor  : competitorReducer,
        model : Modelslice,
        
      
    
       

      
    }
    
})

