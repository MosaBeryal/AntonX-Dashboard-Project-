import { createSlice } from "@reduxjs/toolkit";
 const initialState=[];

 const LikedPostsSlice= createSlice({
    name:"LikedPosts",
    initialState,
    reducers:{
        like(state,action){
            //mutated the state(Bad redux implemenation)
            state.push(action.payload)
        },
        unlike(state,action){
        return state.filter(post=>post.id!==action.payload)

        }
    }
 })
 export const{like,unlike}=LikedPostsSlice.actions;
 export default LikedPostsSlice.reducer;