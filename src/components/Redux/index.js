import { configureStore } from '@reduxjs/toolkit';
import bagSlice from './BagSlice';
import wishSlice from './WishListSlice';

const store = configureStore({
    reducer: {
        bag: bagSlice.reducer,
        wish: wishSlice.reducer
    }
})

export default store;