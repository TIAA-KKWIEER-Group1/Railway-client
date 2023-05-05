import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from 'react-icons/ai';
import styles from './Footer.module.css';

function Footer() {
  return (
    <section className={styles.Footer}>
      <div className={styles.footerContainer}>
        <div className={styles.leftSide}>
          <h2>Railway Reservation</h2>
          <p>Address: 23 Main Street, India</p>
          <p>Phone: 1234567890</p>
        </div>
        <div className={styles.rightSide}>
          <p>Email: info@railway-reservation.com</p>
          <div className={styles.social}>
            <p>Follow us on Social Media</p>
            <div className={styles.socialIcons}>
              <AiFillFacebook className={styles.facebook} />
              <AiFillTwitterCircle className={styles.twitter} />
              <AiOutlineInstagram className={styles.instagram} />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyRight}>Copyright © 2023 Railway Reservation</p>
    </section>
  );
}

export default Footer;
