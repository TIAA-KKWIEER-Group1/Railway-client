import { Link } from 'react-router-dom';
import styles from './ReservationSuccessModal.module.css';

function ReservationSuccessModal() {
  return (
    <div className={styles.ReservationSuccessModal}>
      <div className={styles.container}>
        <h1 className={styles.title}>Ticket Reserved Successfully</h1>
        <p>
          Congratulations your ticket has booked Successfully. Thanks for
          booking ticket from our site.
        </p>
        <Link to="/" className="default-button">
          Home
        </Link>
      </div>
    </div>
  );
}

export default ReservationSuccessModal;
