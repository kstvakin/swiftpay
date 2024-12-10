import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  length: number;
  signUpForm: Record<string,any>;
}

const initialState: FormState = {
  length: 25,
  signUpForm: {
    name: '',
    email: '',
    language: '',
    dob: null,
    country: '',
    address: '',
    phoneNumber: '',
    flag: '' 
  }
};

const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    increment: (state: FormState) => {
      if(state.length < 100){
        state.length += 25;
      }
    },
    decrement: (state: FormState) => {
      if(state.length > 0){
        state.length -= 25;
        console.log(state)
      }
    },
    setSignUpForm: (state: FormState, action: PayloadAction<Record<string, any>>) => {
      state.signUpForm = action.payload;
    },
    incrementByAmount: (state: FormState, action: PayloadAction<number>) => {
      state.length += action.payload;
    },
    purgeSignUpForm: (state: FormState) => {
      state.length = 25;
      state.signUpForm = {...initialState.signUpForm}
    },
    setLength: (state: FormState) =>{
      state.length = 50;
    }
  },
});

export const { 
  increment, 
  decrement, 
  incrementByAmount, 
  setSignUpForm,
  purgeSignUpForm,
  setLength
} = signUpSlice.actions;

export default signUpSlice.reducer;
