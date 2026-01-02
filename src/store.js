// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';  // Import the venue slice reducer
import avReducer from './avSlice';  // Import the av slice reducer
import mealsReducer from './mealsSlice'; // Import the meals slice reducer

export default configureStore({
  reducer: {
    venue: venueReducer,  // Add the venue reducer to the store
    av: avReducer,  // Add the av reducer to the store
    meals: mealsReducer, // Add the meals reducer to the store
  },
});
