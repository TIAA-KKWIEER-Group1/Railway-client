/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './ReservationSuccessModal.module.css';

function ReservationSuccessModal({ reservationData }) {
  return (
    <div className={styles.ReservationSuccessModal}>
      <div className={styles.container}>
        <h1 className={styles.title}>Ticket Reserved Successfully</h1>
        <p>
          Congratulations your ticket has booked Successfully. Thanks for
          booking ticket from our site.
        </p>

        {/* We have to show ticket data */}
        <h3>Train PRN: {reservationData?.PRN}</h3>
        <table className={styles.styledTable}>
          <thead>
            <tr>
              <th>Seat Number</th>

              <th>Name</th>
              <th>Coach</th>
            </tr>
          </thead>
          <tbody>
            {reservationData?.ticket?.map((passenger) => (
              <tr key={passenger.seatNo}>
                <td>{passenger.seatNo}</td>
                <td>{passenger.name}</td>
                <td>{passenger.coach}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/" className="default-button" style={{ marginTop: '1rem' }}>
          Home
        </Link>
      </div>
    </div>
  );
}

export default ReservationSuccessModal;
