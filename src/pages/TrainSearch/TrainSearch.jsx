import styles from './TrainSearch.module.css';
function TrainSearch() {
  return (
    <div className={styles.TrainSearch}>
      <div className={styles.searchContainer}>
        <form action="#">
          <input type="text" placeholder="Destination..." name="destination" />
          <input type="text" placeholder="Source..." name="source" />
          <input type="date" name="date" />
          <input type="time" name="time" />
          <button type="submit" />
          Search
        </form>
      </div>

      <main>
        <div className={styles.container}>
          <div className={styles.cardHorizontal}>
            <div className={styles.navbar}>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Train Name:</span>
                <span className={styles.navbarValue}>Express 2</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Date:</span>
                <span className={styles.navbarValue}>5th May, 2023</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Source:</span>
                <span className={styles.navbarValue}>New Delhi</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Destination:</span>
                <span className={styles.navbarValue}>Mumbai</span>
              </div>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>Train Name</h2>
                <p className={styles.cardText}>Date: 10/05/2023</p>
                <p className={styles.cardText}>Arrival Time: 00:00:00 AM</p>
                <p className={styles.cardText}>Departure Time: 00:00:00 AM</p>
              </div>
              <div className={styles.cardButtons}>
                <button className={styles.btn} />
                Sleeper
                <button className={styles.btn} />
                AC First Class
              </div>
              <div className={styles.btnGroup}>
                <a href="#" className={styles.bookNowBtn}>
                  Book Now
                </a>
                <a
                  href="route.html"
                  id="btn-1"
                  className={styles.viewDetailsBtn}
                >
                  View more
                </a>
              </div>
            </div>
          </div>

          <div className={styles.cardHorizontal}>
            <div className={styles.navbar}>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Train Name:</span>
                <span className={styles.navbarValue}>Express 2</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Date:</span>
                <span className={styles.navbarValue}>5th May, 2023</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Source:</span>
                <span className={styles.navbarValue}>New Delhi</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Destination:</span>
                <span className={styles.navbarValue}>Mumbai</span>
              </div>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>Train Name</h2>
                <p className={styles.cardText}>Date: 10/05/2023</p>
                <p className={styles.cardText}>Arrival Time: 00:00:00 AM</p>
                <p className={styles.cardText}>Departure Time: 00:00:00 AM</p>
              </div>
              <div className={styles.cardButtons}>
                <button className={styles.btn} />
                Sleeper
                <button className={styles.btn} />
                AC First Class
              </div>
              <div className={styles.btnGroup}>
                <a href="#" className={styles.bookNowBtn}>
                  Book Now
                </a>
                <a
                  href="route.html"
                  id="btn-1"
                  className={styles.viewDetailsBtn}
                >
                  View more
                </a>
              </div>
            </div>
          </div>

          <div className={styles.cardHorizontal}>
            <div className={styles.navbar}>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Train Name:</span>
                <span className={styles.navbarValue}>Express 2</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Date:</span>
                <span className={styles.navbarValue}>5th May, 2023</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Source:</span>
                <span className={styles.navbarValue}>New Delhi</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Destination:</span>
                <span className={styles.navbarValue}>Mumbai</span>
              </div>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>Train Name</h2>
                <p className={styles.cardText}>Date: 10/05/2023</p>
                <p className={styles.cardText}>Arrival Time: 00:00:00 AM</p>
                <p className={styles.cardText}>Departure Time: 00:00:00 AM</p>
              </div>
              <div className={styles.cardButtons}>
                <button className={styles.btn} />
                Sleeper
                <button className={styles.btn} />
                AC First Class
              </div>
              <div className={styles.btnGroup}>
                <a href="#" className={styles.bookNowBtn}>
                  Book Now
                </a>
                <a
                  href="route.html"
                  id="btn-1"
                  className={styles.viewDetailsBtn}
                >
                  View more
                </a>
              </div>
            </div>
          </div>

          <div className={styles.cardHorizontal}>
            <div className={styles.navbar}>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Train Name:</span>
                <span className={styles.navbarValue}>Express 2</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Date:</span>
                <span className={styles.navbarValue}>5th May, 2023</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Source:</span>
                <span className={styles.navbarValue}>New Delhi</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Destination:</span>
                <span className={styles.navbarValue}>Mumbai</span>
              </div>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>Train Name</h2>
                <p className={styles.cardText}>Date: 10/05/2023</p>
                <p className={styles.cardText}>Arrival Time: 00:00:00 AM</p>
                <p className={styles.cardText}>Departure Time: 00:00:00 AM</p>
              </div>
              <div className={styles.cardButtons}>
                <button className={styles.btn} />
                Sleeper
                <button className={styles.btn} />
                AC First Class
              </div>
              <div className={styles.btnGroup}>
                <a href="#" className={styles.bookNowBtn}>
                  Book Now
                </a>
                <a
                  href="route.html"
                  id="btn-1"
                  className={styles.viewDetailsBtn}
                >
                  View more
                </a>
              </div>
            </div>
          </div>

          <div className={styles.cardHorizontal}>
            <div className={styles.navbar}>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Train Name:</span>
                <span className={styles.navbarValue}>Express 2</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Date:</span>
                <span className={styles.navbarValue}>5th May, 2023</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Source:</span>
                <span className={styles.navbarValue}>New Delhi</span>
              </div>
              <div className={styles.navbarItem}>
                <span className={styles.navbarLabel}>Destination:</span>
                <span className={styles.navbarValue}>Mumbai</span>
              </div>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>Train Name</h2>
                <p className={styles.cardText}>Date: 10/05/2023</p>
                <p className={styles.cardText}>Arrival Time: 00:00:00 AM</p>
                <p className={styles.cardText}>Departure Time: 00:00:00 AM</p>
              </div>
              <div className={styles.cardButtons}>
                <button className={styles.btn} />
                Sleeper
                <button className={styles.btn} />
                AC First Class
              </div>
              <div className={styles.btnGroup}>
                <a href="#" className={styles.bookNowBtn}>
                  Book Now
                </a>
                <a
                  href="route.html"
                  id="btn-1"
                  className={styles.viewDetailsBtn}
                >
                  View more
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TrainSearch;
