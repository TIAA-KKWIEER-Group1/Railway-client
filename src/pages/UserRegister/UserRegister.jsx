import styles from './UserRegister.module.css';
function UserRegister() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Registration</div>
      <form action="#">
        <div className={styles.userdetails}>
          <div className={styles.inputbox}>
            <span className={styles.details}>First Name</span>
            <input type="text" placeholder="Enter your first name " required />
          </div>
          <div className={styles.inputbox}>
            <span className={styles.details}>Last Name</span>
            <input type="text" placeholder="Enter your last name " required />
          </div>
          <div className={styles.inputbox}>
            <span className={styles.details}>Email</span>
            <input type="email" placeholder="Confirm your email" required />
          </div>
          <div className={styles.inputbox}>
            <span className={styles.details}>Phone</span>
            <input type="tel" placeholder="Enter your Phone " required />
          </div>
          <div className={styles.inputbox}>
            <span className={styles.details}>Password</span>
            <input
              type="password"
              placeholder="Enter your password "
              required
            />
          </div>
          <div className={styles.inputbox}>
            <span className={styles.details}>Adhar No</span>
            <input type="number" placeholder="Enter your Adhar " required />
          </div>
          <div className={styles.inputbox}>
            <span className={styles.details}>Address</span>
            <input type="text" placeholder="Enter your Address " required />
          </div>

          <div className={styles.inputbox}>
            <span className={styles.details}>Prefered Language</span>
            <select name="">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
          <div className={styles.inputbox}>
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
        <div className={styles.inputbox}>
          <center>
            {' '}
            <span className={styles.details}>
              Already a member?&nbsp;
              <a href="#">
                <span>Login</span>
              </a>
            </span>
          </center>
        </div>
      </form>
    </div>
  );
}

export default UserRegister;
