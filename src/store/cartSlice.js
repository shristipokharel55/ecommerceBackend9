import { createSlice } from "@reduxjs/toolkit";


// const item = [
//     {
//       "product": 1,
//       "quantity": 2
//     },
//     {
//       "product": 2,
//       "quantity": 2
//     },
//     {
//       "product": 3,
//       "quantity": 2
//     },
// ]

// const indesis =item.findIndex((item)=>item.product== 2)
// console.log(indesis)

   



const cartSlice = createSlice({
        name : 'cart',
        initialState :  [],
        reducers :{
            addItem : (state,actions)=>{

            const productIndex =  state.findIndex((item)=> item.product ==actions.payload.product)
            
            if(productIndex == -1){
                // Product does not exist, add to cart
                state.push(actions.payload);
            }else{
                // Product exists, you can update quantity or handle accordingly
                // Example: state[productIndex].quantity += actions.payload.quantity;
                console.log("product already exists, consider updating quantity");
            }

             console.log(actions.payload)
             console.log("the state is ",state);
            },
            removeItem : ()=>{

            }
        }
})


export const {addItem,removeItem} = cartSlice.actions

export default cartSlice.reducer