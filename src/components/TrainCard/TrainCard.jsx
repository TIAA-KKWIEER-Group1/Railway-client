/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './TrainCard.module.css';

function TrainCard({ train }) {
  return (
    <div className={styles.cardHorizontal}>
      <div className={styles.navbar}>
        <div className={styles.navbarItem}>
          <span className={styles.navbarLabel}>Train Name:</span>
          <span className={styles.navbarValue}>{train.name}</span>
        </div>
        <div className={styles.navbarItem}>
          <span className={styles.navbarLabel}>Date:</span>
          <span className={styles.navbarValue}>{train.departureDate}</span>
        </div>
        <div className={styles.navbarItem}>
          <span className={styles.navbarLabel}>Source:</span>
          <span className={styles.navbarValue}>{train.source}</span>
        </div>
        <div className={styles.navbarItem}>
          <span className={styles.navbarLabel}>Destination:</span>
          <span className={styles.navbarValue}>{train.destination}</span>
        </div>
      </div>
      <div className={styles.cardDetails}>
        <div className={styles.cardInfo}>
          <h2 className={styles.cardTitle}>Train Name</h2>
          <p className={styles.cardText}>Date: 10/05/2023</p>
          <p className={styles.cardText}>Arrival Time: 00:00:00 AM</p>
          <p className={styles.cardText}>Departure Time: 00:00:00 AM</p>
        </div>
        <div className={styles.cardButtons}>
          <button className={styles.btn}>Sleeper</button>
          <button className={styles.btn}>AC First Class</button>
        </div>
        <div className={styles.btnGroup}>
          <Link
            to={`/train/reservation/${train._id}`}
            className={styles.bookNowBtn}
          >
            Book Now
          </Link>
          <Link to={`/trains/${train._id}`} className={styles.viewDetailsBtn}>
            View more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrainCard;
