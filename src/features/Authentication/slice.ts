import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isActive: boolean;
  name: string | null;
}

const initialState: AuthState = {
  isActive: false,
  name: null,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isActive = true;
      state.name = action.payload;
    },
    logout: (state) => {
      state.isActive = false;
      state.name = null;
    },
  },
});

export const { actions: authActions } = authSlice;
export default authSlice.reducer;
