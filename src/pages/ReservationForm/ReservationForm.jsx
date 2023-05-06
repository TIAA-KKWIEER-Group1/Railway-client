import { useState } from 'react';
import styles from './ReservationForm.module.css';
function ReservationForm() {
  const [arr, setArr] = useState([]);
  const addDetail = (e) => {
    e.preventDefault();
    let ele = 0;
    setArr([...arr, ele]);
  };

  const deleteDetail = (e, index) => {
    e.preventDefault();
    let data = [...arr];
    data.splice(index, 1);
    setArr(data);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>Reservation</div>
      <center>
        <span className={styles.details}>Train Name</span>(
        <span className={styles.details}>Train Number</span>)
      </center>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.content}>
            <p>Arrival time</p>
            <p>Date</p>
            <p>Start station</p>
            <br />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            {/* <i _ngcontent-cdb-c68="" className={fa} fa-exchange rotate90 ></i> */}
          </div>
          styles.
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            <p>Departure time</p>
            <p>Date</p>
            <p>End station</p>
            <br />
          </div>
        </div>
      </div>
      <div className={styles.formadder}>
        <div className={styles.title}>passeger Details</div>
        <form action="#">
          <div className={styles.userdetails}>
            <div className={styles.inputbox}>
              <span className={styles.details}>First Name</span>
              <input type="text" placeholder="Enter first name " required />
            </div>
            <div className={styles.inputbox}>
              <span className={styles.details}>Middle Name</span>
              <input type="text" placeholder="Enter  Middle name " required />
            </div>
            <div className={styles.inputbox}>
              <span className={styles.details}>Last Name</span>
              <input type="text" placeholder="Enter last name " required />
            </div>
            <div className={styles.inputbox}>
              <span className={styles.details}>Age</span>
              <input type="number" placeholder="Enter age" required />
            </div>

            <div className={styles.inputbox}>
              <span className={styles.details}>Gender</span>
              <select name="">
                <option disabled selected>
                  Select gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className={styles.inputbox}>
              <span className={styles.details}>Select Class</span>
              <select name="">
                <option disabled selected>
                  Select Class
                </option>
                <option>AC </option>

                <option>Sleeper (SL)</option>
                <option>General</option>
              </select>
            </div>
          </div>
          <div id="newinput"></div>

          {/* New */}
          {arr.map((a) => (
            <div className={styles.formadder}>
              <div className={styles.title}>passeger Details</div>
              {/* <form action="#"> */}
              <div className={styles.userdetails}>
                <div className={styles.inputbox}>
                  <span className={styles.details}>First Name</span>
                  <input type="text" placeholder="Enter first name " required />
                </div>
                <div className={styles.inputbox}>
                  <span className={styles.details}>Middle Name</span>
                  <input
                    type="text"
                    placeholder="Enter  Middle name "
                    required
                  />
                </div>
                <div className={styles.inputbox}>
                  <span className={styles.details}>Last Name</span>
                  <input type="text" placeholder="Enter last name " required />
                </div>
                <div className={styles.inputbox}>
                  <span className={styles.details}>Age</span>
                  <input type="number" placeholder="Enter age" required />
                </div>

                <div className={styles.inputbox}>
                  <span className={styles.details}>Gender</span>
                  <select name="">
                    <option disabled selected>
                      Select gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className={styles.inputbox}>
                  <span className={styles.details}>Select Class</span>
                  <select name="">
                    <option disabled selected>
                      Select Class
                    </option>
                    <option>AC </option>

                    <option>Sleeper (SL)</option>
                    <option>General</option>
                  </select>
                </div>
              </div>
              <div id="newinput"></div>

              {/* <div className={styles.button}>
             <input type="submit" value="Book" />
           </div> */}
              {/* </form> */}
            </div>
          ))}
          <button
            className={styles.formAdder}
            type="button"
            onClick={addDetail}
          >
            ADD
          </button>
          <button className={styles.btn} onClick={deleteDetail}>
            <i className={styles.bi} bi-trash></i>
            Delete
          </button>
          <div className={styles.button}>
            <input type="submit" value="Book" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
