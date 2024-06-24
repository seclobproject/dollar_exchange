import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useJwt from '../custom_hooks/useJwt';

// Async thunk for token verification
export const verifyToken = createAsyncThunk('auth/verifyToken', async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = useJwt(token);
    return { token, userName: decodedToken.name };
  }
  throw new Error('No token found');
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isLoading: true,
    userName: null,
  },
  reducers: {
    login: (state, action) => {
      const { token, userName } = action.payload;
      localStorage.setItem('token', token);
      state.isAuthenticated = true;
      state.userName = userName;
      state.isLoading = false;
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.isAuthenticated = false;
      state.userName = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.userName = action.payload.userName;
        state.isLoading = false;
      })
      .addCase(verifyToken.rejected, (state) => {
        state.isAuthenticated = false;
        state.isLoading = false;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
