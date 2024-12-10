import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  pinState: string
}

const initialState: FormState = {
  pinState: '' 
};

const createPinSlice = createSlice({
  name: "pin",
  initialState,
  reducers: {
    setUserPin: (state: FormState, action: PayloadAction<string>) => {
      state.pinState = action.payload;
    }
  },
});

export const { setUserPin } = createPinSlice.actions;

export default createPinSlice.reducer;
