/* eslint-disable react/prop-types */
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import canBookTicket from '../../utils/canBookTicket';
import styles from './TrainCard.module.css';

function TrainCard({ train }) {
  const user = useSelector((state) => state.user);

  return (
    <div className={styles.TrainCard}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.navbarItem}>
            <span className={styles.navbarLabel}>Train Name:</span>
            <span className={styles.navbarValue}>{train.name}</span>
          </div>
          <div className={styles.navbarItem}>
            <span className={styles.navbarLabel}>Train Number:</span>
            <span className={styles.navbarValue}>{train.no}</span>
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
        <div className={styles.trainDetails}>
          <p className={`${styles.train} ${styles.trainTime}`}>
            PRN: {train._id}
          </p>
          <p className={`${styles.train} ${styles.trainTime}`}>
            Date: {train.sourceDepartureDate}
          </p>

          <p className={`${styles.train} ${styles.trainTime}`}>
            Arrival Time: {train.sourceArrivalTime}
          </p>
          <p className={`${styles.train} ${styles.trainTime}`}>
            Departure Time: {train.sourceDepartureTime}
          </p>

          <div className={styles.buttonGroup}>
            <p>Available Seat Count</p>
            <div className={styles.countGroup}>
              <button className={styles.btn}>
                AC: {train.availableACCoach}
              </button>
              <button className={styles.btn}>
                Sleeper: {train.availableSleeperCoach}
              </button>
              <button className={styles.btn}>
                General: {train.availableGeneralCoach}
              </button>
            </div>

            <div className={styles.buttonGroup}>
              <div className={styles.cardButtons}>
                {canBookTicket(
                  train.sourceArrivalDate,
                  train.sourceArrivalTime,
                ) && user.isLoggedIn ? (
                  <Link
                    to={`/train/reservation/${train._id}`}
                    className={`default-button ${styles.bookButton}`}
                  >
                    Book Now
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      if (!user.isLoggedIn) {
                        toast.error('Please Login to Book Ticket ');
                      } else {
                        toast.error('Can only book 3 Hour prior');
                      }
                    }}
                    className={`default-button ${styles.bookButton}`}
                  >
                    Book Now
                  </button>
                )}

                <Link
                  to={`/trains/${train._id}`}
                  className={`default-button ${styles.btnp} ${styles.btn1}`}
                >
                  View more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainCard;
