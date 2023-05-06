import { useRef, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import LogoutButton from '../LogoutButton/LogoutButton';
import styles from './Navbar.module.css';

function Navbar() {
  const user = useSelector((state) => state.user);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsNavOpen(false);
  };

  // Navbar
  const navigationRef = useRef(null);
  useOutsideAlerter(navigationRef, handleCloseNavbar);

  const toggleNav = () => {
    setIsNavOpen((state) => !state);
  };

  return (
    <header className={styles.Header}>
      <div className={`container ${styles.navWrapper}`}>
        <Link to="/" className={styles.heading}>
          Railway Reservation
        </Link>
        <button
          type="button"
          onClick={toggleNav}
          className={styles.mobileNavToggle}
          aria-controls="primary-navigation"
        >
          {!isNavOpen ? <RxHamburgerMenu /> : <MdOutlineClose />}
          <span className="visually-hidden">Menu</span>
        </button>

        {/* Div is used to provide backdrop shadow */}
        <div
          className={`${styles.backdrop} ${
            isNavOpen ? styles.backdropOpen : ''
          }`}
        ></div>

        <nav
          ref={navigationRef}
          className={`${styles.primaryNavigation} ${
            isNavOpen ? styles.primaryNavigationOpen : ''
          }`}
        >
          <ul className={styles.navList} id="primary-navigation">
            <li className={styles.navItem}>
              <Link to="/">Home</Link>
            </li>
            {user?.isLoggedIn ? (
              <LogoutButton>Logout</LogoutButton>
            ) : (
              <>
                <li className={styles.navItem}>
                  <Link to="/user/login">User Login</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/user/register">User Register</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/admin/login">Admin Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
