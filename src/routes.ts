export enum AppRoutes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Empty = '/404'
}

export const getOfferRoute = (id: string) => AppRoutes.Offer.replace(':id', id);
