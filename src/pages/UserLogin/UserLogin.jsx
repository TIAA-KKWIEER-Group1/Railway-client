import styles from './UserLogin.module.css';
function UserLogin() {
  return (
    <div className={styles.main}>
      <div className="box">
        <div className="logo">
          <img
            src="logo1.jpg"
            alt="Italian Trulli"
            width="80px"
            height="80px"
          />
        </div>
        <div className="name">Login As User</div>

        <form className="input-form">
          <div className="input-container">
            <i className="fa fa-user icon"></i>
            <input
              className="input-field"
              type="text"
              placeholder="Enter Username"
              id="usrnm"
              required
            />
          </div>
          <div className="input-container">
            <i className="fa fa-key icon"></i>
            <input
              className="input-field"
              type="password"
              placeholder="Enter Password"
              id="pass"
              required
            />
          </div>
          <div className="input-container">
            <input type="checkbox" className="check-box" />{' '}
            <span className="left">Remember Password</span>
            <span className="right">
              <a href="#">Forgot Password?</a>
            </span>
          </div>

          <button type="submit" className="btn" id="login">
            Login
          </button>
          <div className="regis">
            Dont have Account?
            <span>
              <a href="#">Register here</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
