import { createAction } from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { OfferType } from '../types';

export const changeCity = createAction<typeof CITIES[number]>('offers/changeCity');
export const setOffers = createAction<OfferType[]>('offers/setOffers');
