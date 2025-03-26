import type { OfferType } from '../types';

export const OFFERS: OfferType[] = [
  {
    'id': '20acdcc4-639f-4eaa-91ab-230523c8bb96',
    'title': 'Waterfront with extraordinary view',
    'type': 'room',
    'price': 111,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.5
  },
  {
    'id': '0d2d75e4-f541-430f-9ad5-97b1b4dc1352',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 273,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': '29ce5d8e-d888-4ef3-b14b-b2b3ff24f6c7',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 357,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.5
  },
  {
    'id': '3be0544f-3128-479c-9bd9-6f0656e31951',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 391,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  }
];

export function getOfferById(id: string | undefined) {
  if (!id) {
    return null;
  }

  return OFFERS.find((offer) => offer.id === id) || null;
}
