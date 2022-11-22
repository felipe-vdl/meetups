import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>Brasil Furmeets</h1>
      </div>
      <nav>
        <ul className={classes.links}>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href='/meetups/new'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
