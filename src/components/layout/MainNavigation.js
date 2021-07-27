import { Link } from 'react-router-dom';
// import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className='w-100 h-16 bg-green-200 flex justify-between items-center'>
      <h3 className='font-bold'>React Athletes</h3>
      <nav className=''>
        <ul className='flex items-baseline gap-4'>
          <li>
            <Link to='/'>Athletes</Link>
          </li>
          <li>
            <Link to='/new-athletes'>New Athletes</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
