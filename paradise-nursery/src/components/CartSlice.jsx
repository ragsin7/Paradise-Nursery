import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
  name:"cart", initialState:{items:[]},
  reducers:{
    addItem:(state,action)=>{const p=action.payload;const item=state.items.find(i=>i.id===p.id);if(item)item.quantity+=1;else state.items.push({...p,quantity:1});},
    increaseQuantity:(state,action)=>{const item=state.items.find(i=>i.id===action.payload);if(item)item.quantity+=1;},
    decreaseQuantity:(state,action)=>{const item=state.items.find(i=>i.id===action.payload);if(item&&item.quantity>1)item.quantity-=1;else state.items=state.items.filter(i=>i.id!==action.payload);},
    removeItem:(state,action)=>{state.items=state.items.filter(i=>i.id!==action.payload);}
  }
});
export const {addItem,increaseQuantity,decreaseQuantity,removeItem}=cartSlice.actions;
export default cartSlice.reducer;
