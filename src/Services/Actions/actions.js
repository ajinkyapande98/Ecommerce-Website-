import { Add_To_Cart } from "../constants";
export const addToCart = (data) => {
  return {
    type: Add_To_Cart,
    data: data,
  };
};

// export const removeToCart=(data)=>{
//     return{
//         type:"Remove_TO_Cart",
//         data: data
//     }
// }
