import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    loginUser(state) {
      console.log("Logging in with:", state.email, state.password);
      setEmail("");
      setPassword("");
    },
  },
});

export const { setEmail, setPassword, loginUser } = userSlice.actions;

export default userSlice.reducer;
