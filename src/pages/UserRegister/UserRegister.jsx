import { Link } from 'react-router-dom';
import styles from './UserRegister.module.css';
function UserRegister() {
  return (
    <div className={styles.UserRegister}>
      <div className={styles.container}>
        <div className="title">Registration</div>
        <form action="#">
          <div className={styles.userDetails}>
            <div className={styles.inputContainer}>
              <span className={styles.details}>First Name</span>
              <input
                type="text"
                placeholder="Enter your first name "
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.details}>Last Name</span>
              <input type="text" placeholder="Enter your last name " required />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.details}>Email</span>
              <input type="email" placeholder="Confirm your email" required />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.details}>Phone</span>
              <input type="tel" placeholder="Enter your Phone " required />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.details}>Password</span>
              <input
                type="password"
                placeholder="Enter your password "
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.details}>Aadhaar No</span>
              <input type="number" placeholder="Enter your Aadhaar " required />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.details}>Address</span>
              <input type="text" placeholder="Enter your Address " required />
            </div>

            <div className={styles.inputContainer}>
              <span className={styles.details}>Preferred Language</span>
              <select name="">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.details}>Gender</span>
              <select name="">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className={styles.button}>
            <input type="submit" value="Register" />
          </div>
          <div className={styles.loginSignUp}>
            <span className={styles.signUpText}>
              Not a member?
              <Link to="/user/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
