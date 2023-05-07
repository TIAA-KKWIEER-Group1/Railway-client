import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare,
} from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <section className={styles.Footer}>
      <footer className={styles.footerDistributed}>
        <div className={styles.footerLeft}>
          <h3>
            Train<span> Reservation </span>
          </h3>

          <p className={styles.footerLinks}>
            <a href="#" className={styles.link - 1}>
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p className={styles.footerCompanyName}>Train reservation © 2023</p>
        </div>

        <div className={styles.footerCenter}>
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>KK wagh </span> Collage of engineering, Nashik
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>8329072639</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">train@reservation.com</a>
            </p>
          </div>
        </div>

        <div className={styles.footerRight}>
          <p className={styles.footerCompanyAbout}>
            <span>About the Website</span>
            Train Reservation - Easy train seat reservations! Search, select,
            and reserve up to 3 hours before departure. Admins can manage train
            schedules and inventory via Excel. Simplifying train travel.
          </p>

          <ul className={styles.links}>
            <li>
              <a href="#" className="social-link">
                <FaFacebookSquare size={28} color="#4267B2" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <FaTwitterSquare size={28} color="#1DA1F2" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <FaInstagram size={28} color="#E1306C" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <FaLinkedinIn size={28} color="#1DA1F2" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
