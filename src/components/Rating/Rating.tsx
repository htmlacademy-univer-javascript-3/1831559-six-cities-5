import { FC, ReactNode } from 'react';

type RatingProps = {
  count: number;
  classPreffix: string;
  children?: ReactNode;
}

export const Rating: FC<RatingProps> = ({ count, classPreffix, children }) => {
  const roundedRating = Math.round(count);
  const styleRating = roundedRating * 20;

  return (
    <div className={`${classPreffix}__rating rating`}>
      <div className={`${classPreffix}__stars rating__stars`}>
        <span style={{width: `${styleRating}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
};
