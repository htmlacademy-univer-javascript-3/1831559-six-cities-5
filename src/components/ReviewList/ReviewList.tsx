import { FC } from 'react';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import type { Review } from '../../types';

type ReviewListProps = {
  reviews: Review[];
}

export const ReviewList: FC<ReviewListProps> = ({ reviews }) => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <ReviewItem key={review.id} reviewData={review} />
    ))}
  </ul>
);
