export enum AppRoutes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export const getOfferRoute = (id: string) => AppRoutes.Offer.replace(':id', id);
