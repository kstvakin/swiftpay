import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  password: string
}

const initialState: FormState = {
  password: '' 
};

const createPasswordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setUserPassword: (state: FormState, action: PayloadAction<string>) => {
      state.password = action.payload;
    }
  },
});

export const { setUserPassword } = createPasswordSlice.actions;

export default createPasswordSlice.reducer;
