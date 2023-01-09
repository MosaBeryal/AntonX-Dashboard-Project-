import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const FollowingSlice = createSlice({
  name: "following",
  initialState,
  reducers: {
    follow(state, action) {
      state.push(action.payload);
    },
    unFollow(state, action) {
    return state.filter(Users=> Users.id !== action.payload);
    },
  },
});
export const { follow, unFollow } = FollowingSlice.actions;
export default FollowingSlice.reducer;
