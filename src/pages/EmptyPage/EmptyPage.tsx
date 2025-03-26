import { Link } from 'react-router-dom';
import { AppRoutes } from '../../routes';

export const EmptyPage = () => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h1 style={{color: '#4481c3'}}>404</h1>
    <p>The page you&apos;re looking for can&apos;t be found</p>
    <p style={{color: '#4481c3'}}><Link to={AppRoutes.Main}>Go to the main page</Link></p>
  </div>
);
