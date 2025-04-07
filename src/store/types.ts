import { OfferType } from '../types';
import { CITIES } from '../const';

export type State = {
  city: typeof CITIES[number];
  offers: OfferType[];
}
