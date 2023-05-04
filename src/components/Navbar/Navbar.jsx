import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.Navbar}>
      <h1>Railway</h1>
      <ul className={styles.links}>
        <li>
          <Link to="/user/login">User Login</Link>
        </li>
        <li>
          <Link to="/user/register">User Register</Link>
        </li>
        <li>
          <Link to="/admin/login">Admin Login</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
