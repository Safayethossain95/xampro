// src/store/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    value: 0,
    username: localStorage.getItem('user') || '',
    cart: JSON.parse(localStorage.getItem('cart')) || [], 
    mypackage: JSON.parse(localStorage.getItem('mypackage')) || [],
    createnewpackage: JSON.parse(localStorage.getItem('mypackage')) || [],
    createpackerr:false
  },
  reducers: {
    packerror:(state)=>{
      return {
        ...state,
        createpackerr: true,
      };
    },
    setUsername: (state, action) => {
        state.username = action.payload;
        localStorage.setItem('user', action.payload) 
      },
      clearUsername: (state) => {
        state.username = '';
        localStorage.removeItem('user'); 
      },
      addtoCart :(state,action)=>{
        const updatedCart = [...state.cart, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
      },
      removeCart:(state)=>{
        localStorage.removeItem('cart'); // Remove cart from localStorage
      return {
        ...state,
        cart: [],
      };
      },
      deleteItemfromCart:(state, action) => {
        const idToDelete = action.payload; // The ID to delete
        state.cart = state.cart.filter(item => item.id !== idToDelete);
        localStorage.setItem('cart', JSON.stringify(state.cart)); // Update localStorage
      },
      addtomypackage :(state, action) => {
        const isArray = Array.isArray(action.payload);
        const updatedmypackage = isArray
          ? [...state.mypackage, ...action.payload] // Spread array elements
          : [...state.mypackage, action.payload]; // Add single object
      
        localStorage.setItem('mypackage', JSON.stringify(updatedmypackage));
      
        return {
          ...state,
          mypackage: updatedmypackage,
        };
      },
     
      deletepackage :(state) => {
        return {
          ...state,
          mypackage: [],
        };
      }
  },
});

export const { increment, decrement, incrementByAmount,setUsername,clearUsername,addtoCart,removeCart,deleteItemfromCart,addtomypackage,deletepackage,packerror } = exampleSlice.actions;

export default exampleSlice.reducer;
