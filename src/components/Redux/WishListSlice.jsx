import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: 'wishList',
    initialState: {
        wishList: [],
        totalQuantity: 0,
        showWish: false
    },

    reducers: {
        addToWish(state, action) {
            const newWishItem = action.payload;
            console.log(newWishItem)
            //first check if item is available in wishlist
            const existingWishItem = state.wishList.find((item) => item.id === newWishItem.id)
            // console.log(existingWishItem);
            if (existingWishItem) {
                // return(
                //     <h6>product already exist</h6>
                // )
            } else {
                state.wishList.push({
                    id: newWishItem.id,
                    price: newWishItem.price,
                    quantity: 1,
                    totalPrice: newWishItem.price,
                    name: newWishItem.name,
                    image: newWishItem.image,
                    title: newWishItem.title,
                    colors: newWishItem.colors,
                    comments: newWishItem.comments
                })
                state.totalQuantity++;
            }
        },
        deleteProduct(state, action) {
            const id = action.payload;
            state.wishList = state.wishList.filter(item => item.id !==id);
            state.totalQuantity --;
        },
    }
})

export const wishActions = wishSlice.actions;
export default wishSlice