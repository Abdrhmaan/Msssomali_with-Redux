import { createSlice } from "@reduxjs/toolkit";
 import compatetar from "../../competitors.json"



const initialState = {
    competitors: compatetar,
    currentCompetitor: null,
    voteCount: 0
};

const CompatetarSlice = createSlice({
    name: "competitor",
    initialState,
    reducers  :{
        setCurrentCompetitor : (state,action)=> {
            state.currentCompetitor = action.payload
        },
        increaseVont : (state)=>{
            state.voteCount = state.voteCount +1
        },
        decreasVont : (state)=> {
            state.voteCount = state.voteCount -1
        },
        addvotedtocompatetar  : (state , action) =>{

            let compIndex = state.competitors.findIndex((value) => value.Id == action.payload);
            state.competitors[compIndex].NumberofVotes = Number(state.competitors[compIndex].NumberofVotes) + Number(state.voteCount);
         
         
        },
        reseatestte : (state)=> {
            state.currentCompetitor = null
            state.voteCount= 0

        }


    }

})
  


export default CompatetarSlice.reducer
export const {setCurrentCompetitor,decreasVont,increaseVont,addvotedtocompatetar, reseatestte} = CompatetarSlice.actions