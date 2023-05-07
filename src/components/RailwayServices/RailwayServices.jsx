import emergencyIcon from '../../assets/images/home/facilities/emergency.png';
import fraudIcon from '../../assets/images/home/facilities/fraud.png';
import pantryIcon from '../../assets/images/home/facilities/pantry.png';
import safetyIcon from '../../assets/images/home/facilities/safety.png';
import styles from './RailwayServices.module.css';

function RailwayServices() {
  return (
    <section className={styles.facilities} id="aim">
      <div className="container">
        <div className={styles.facilitiesContainer}>
          <div className={styles.facility}>
            <img src={safetyIcon} alt="" />
            <h3>Safety Guidelines</h3>
            <p>
              Indian Railways care for your safety and security. Passenger
              safety is our first goal.
            </p>
          </div>
          <div className={styles.facility}>
            <img src={pantryIcon} alt="" />
            <h3>Pantry Service</h3>
            <p>
              Enjoy your meal delivered to your seat. Indian Railway provides
              facility to have food with hygiene and care.
            </p>
          </div>
          <div className={styles.facility}>
            <img src={emergencyIcon} alt="" />
            <h3>Emergency Contact</h3>
            <p>
              Stay Safe and Secure with our Emergency services. Indian Railways
              are always ready to help you.
            </p>
          </div>
          <div className={styles.facility}>
            <img src={fraudIcon} alt="" />
            <h3>Be aware of Frauds</h3>
            <p>
              Indian Railways maintain your data security and keeps it on first
              priority. Be aware of all frauds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RailwayServices;
