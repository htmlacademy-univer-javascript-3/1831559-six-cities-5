import { FC } from 'react';
import type { Review } from '../../types';
import { Rating } from '../Rating/Rating';

type ReviewItemProps = {
  reviewData: Review;
}

export const ReviewItem: FC<ReviewItemProps> = ({ reviewData }) => {
  const date = new Date(reviewData.date);
  const dateTime = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const formattedDate = date.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviewData.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {reviewData.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating classPreffix='reviews' count={reviewData.rating}/>
        <p className="reviews__text">
          {reviewData.comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{formattedDate}</time>
      </div>
    </li>
  );
};
