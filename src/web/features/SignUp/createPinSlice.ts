import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  pinState: string;
  pinCreationScreen: number;
}

const initialState: FormState = {
  pinState: '',
  pinCreationScreen: 1
};

const createPinSlice = createSlice({
  name: "pin",
  initialState,
  reducers: {
    setUserPin: (state: FormState, action: PayloadAction<string>) => {
      state.pinState = action.payload;
    },
    changePinScreen: (state: FormState, action: PayloadAction<number>) => {
      state.pinCreationScreen = action.payload;
    }
  },
});

export const { setUserPin, changePinScreen } = createPinSlice.actions;

export default createPinSlice.reducer;
