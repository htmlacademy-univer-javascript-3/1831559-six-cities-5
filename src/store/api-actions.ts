import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { OfferType } from '../types';
import { Dispatch, State } from '../store/types';
import { APIRoute } from '../const';

export const fetchOffersAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.offers);
    return data;
  }
);
