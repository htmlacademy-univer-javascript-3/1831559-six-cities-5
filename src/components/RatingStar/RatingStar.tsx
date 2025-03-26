import { ChangeEvent, FC } from 'react';

type RatingValue = 1 | 2 | 3 | 4 | 5;

type RatingStarProps = {
  value: RatingValue;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TITLES: Record<RatingValue, string> = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly'
};

export const RatingStar: FC<RatingStarProps> = ({ value, checked, onChange}) => {
  const inputId = `${value}-stars`;
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={inputId} type="radio" onChange={onChange} checked={checked} />
      <label htmlFor={inputId} className="reviews__rating-label form__rating-label" title={TITLES[value]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};
