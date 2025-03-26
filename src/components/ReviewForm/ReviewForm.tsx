import { ChangeEvent, FormEvent, useState } from 'react';
import { RatingStar } from '../RatingStar/RatingStar';
import { RATING_VALUES } from '../../const';

export const ReviewForm = () => {
  const [rating, setRating] = useState<number>(0);
  const [commentText, setCommentText] = useState<string>('');

  const ratingChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRating(parseInt(e.target.value, 10));
  };

  const commentTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setCommentText(e.target.value);
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: accumulate data from state and send them to a server
  };

  const MIN_COMMENT_LENGTH = 50;
  const isSubmitDisable = rating === 0 || commentText.trim().length < MIN_COMMENT_LENGTH;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_VALUES.map((value) => <RatingStar key={`${value}-star`} value={value} onChange={ratingChangeHandler} checked={rating === value} />)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={commentText} onChange={commentTextChangeHandler}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisable}>Submit</button>
      </div>
    </form>
  );
};
