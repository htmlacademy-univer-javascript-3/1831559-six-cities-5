import { Pages } from '../../const';

export const CARD_IMAGE_SIZE: Record<Pages, { width: number; height: number }> = {
  [Pages.MAIN]: { width: 260, height: 200 },
  [Pages.FAVORITES]: { width: 150, height: 110 },
  [Pages.OFFER]: { width: 260, height: 200 }
};

export const CARD_PREFIX: Record<Pages, string> = {
  [Pages.MAIN]: 'cities',
  [Pages.FAVORITES]: 'favorites',
  [Pages.OFFER]: 'near-places'
};
