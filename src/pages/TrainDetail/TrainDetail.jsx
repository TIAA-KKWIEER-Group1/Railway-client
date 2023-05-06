import styles from './TrainDetail.module.css';

function TrainDetail() {
  return (
    <div className={styles.TrainDetail}>
      <div className={styles.container}>
        <div className={styles.title}>Routes</div>
        <div className={styles.tableContainer}>
          <table className={styles.styledTable}>
            <thead>
              <tr>
                <th>Station Name</th>
                <th>Station Code</th>
                <th>Arrival</th>
                <th>Halt Time</th>
                <th>Departure</th>
                <th>Day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LOKMANYATILAK T</td>
                <td>LTT</td>
                <td>20:20</td>
                <td>30</td>
                <td>20:50</td>
                <td>1</td>
              </tr>
              <tr>
                <td>RATNAGIRI</td>
                <td>RN</td>
                <td>01:20</td>
                <td>10</td>
                <td>01:30</td>
                <td>2</td>
              </tr>
              <tr>
                <td>MADGAON</td>
                <td>MAO</td>
                <td>05:40</td>
                <td>05</td>
                <td>05:50</td>
                <td>2</td>
              </tr>

              <tr>
                <td>MANGALURU JN</td>
                <td>MAJN</td>
                <td>10:20</td>
                <td>0</td>
                <td>--</td>
                <td>2</td>
              </tr>

              <tr>
                <td>LOKMANYATILAK T</td>
                <td>LTT</td>
                <td>20:20</td>
                <td>30</td>
                <td>20:50</td>
                <td>1</td>
              </tr>
              <tr>
                <td>RATNAGIRI</td>
                <td>RN</td>
                <td>01:20</td>
                <td>10</td>
                <td>01:30</td>
                <td>2</td>
              </tr>
              <tr>
                <td>MADGAON</td>
                <td>MAO</td>
                <td>05:40</td>
                <td>05</td>
                <td>05:50</td>
                <td>2</td>
              </tr>

              <tr>
                <td>MANGALURU JN</td>
                <td>MAJN</td>
                <td>10:20</td>
                <td>0</td>
                <td>--</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <a href="#" className={styles.bookNowBtn}>
          Book Now
        </a>
      </div>
    </div>
  );
}

export default TrainDetail;
