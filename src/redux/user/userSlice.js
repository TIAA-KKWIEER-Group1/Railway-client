import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isLoggedIn: false,
  isAdmin: false,
  user: null,
  admin: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isAdmin = false;
      state.user = action.payload.data;
    },
    loginAdmin: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isAdmin = true;
      state.admin = action.payload.data;
    },
    logout: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = null;
      state.admin = null;
    },
    setIsLoading: (state) => {
      state.isLoading = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions;

// User reducer
export default userSlice.reducer;
