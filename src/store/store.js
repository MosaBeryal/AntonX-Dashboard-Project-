import { configureStore } from "@reduxjs/toolkit";
import LikedPostsReducer from "./LikedPostsSlice";
import FollowingReducer from './FollowingSlice'
const store =configureStore({
    reducer:{
        likedPosts:LikedPostsReducer,
        following:FollowingReducer
    }
})
export default store
