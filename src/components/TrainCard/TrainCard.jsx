/* eslint-disable react/prop-types */
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import canBookTicket from '../../utils/canBookTicket';
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
          <span className={styles.navbarValue}>{train.sourceArrivalDate}</span>
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
          <p className={styles.cardText}>
            Departure Date: {train.sourceDepartureDate}
          </p>
          <p className={styles.cardText}>
            Departure Time: {train.sourceDepartureTime}
          </p>
          <p className={styles.cardText}>
            Arrival Date: {train.destinationArrivalDate}
          </p>

          <p className={styles.cardText}>
            Arrival Time: {train.destinationArrivalTime}
          </p>
        </div>
        <div className={styles.cardButtons}>
          <button className={styles.btn}>
            AC First: {train.availableACCoach}
          </button>
          <button className={styles.btn}>
            General: {train.availableGeneralCoach}
          </button>
          <button className={styles.btn}>
            Sleeper Coach: {train.availableSleeperCoach}
          </button>
        </div>
        <div className={styles.btnGroup}>
          {canBookTicket(train.sourceArrivalDate, train.sourceArrivalTime) ? (
            <Link
              to={`/train/reservation/${train._id}`}
              className={styles.bookNowBtn}
            >
              Book Now
            </Link>
          ) : (
            <button
              onClick={() => toast.error('Can only book 3 Hour prior')}
              className={styles.bookNowBtn}
            >
              Book Now
            </button>
          )}

          <Link to={`/trains/${train._id}`} className={styles.viewDetailsBtn}>
            View more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrainCard;
