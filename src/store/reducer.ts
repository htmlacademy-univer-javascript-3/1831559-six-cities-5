import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers } from './action';
import type { State } from './types';

const initialState: State = {
  city: 'Paris',
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
