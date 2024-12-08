import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  length: number;
}

const initialState: FormState = {
  length: 25,
};

const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    increment: (state: any) => {
      state.length += 25;
    },
    decrement: (state: any) => {
      state.length -= 25;
    },
    incrementByAmount: (state: any, action: PayloadAction<number>) => {
      state.length += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = signUpSlice.actions;

export default signUpSlice.reducer;
