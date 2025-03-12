import { FC } from 'react';
import { Main } from '../../pages/Main/MainPage';

type AppProps = {
  offerCount: number;
}

export const App: FC<AppProps> = ({offerCount}) => <Main offerCount={offerCount}/>;
