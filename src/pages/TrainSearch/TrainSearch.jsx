import style from './TrainSearch.module.css';
function TrainSearch() {
  return (
    <div>
      <div className={style.searchContainer}>
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
        <div className={style.container}>
          <div className={style.cardHorizontal}>
            <div className={style.navbar}>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Train Name:</span>
                <span className={style.navbarValue}>Express 2</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Date:</span>
                <span className={style.navbarValue}>5th May, 2023</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Source:</span>
                <span className={style.navbarValue}>New Delhi</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Destination:</span>
                <span className={style.navbarValue}>Mumbai</span>
              </div>
            </div>
            <div className={style.cardDetails}>
              <div className={style.cardInfo}>
                <h2 className={style.cardTitle}>Train Name</h2>
                <p className={style.cardText}>Date: 10/05/2023</p>
                <p className={style.cardText}>Arrival Time: 00:00:00 AM</p>
                <p className={style.cardText}>Departure Time: 00:00:00 AM</p>
              </div>
              <div className={style.cardButtons}>
                <button className={style.btn} />
                Sleeper
                <button className={style.btn} />
                AC First Class
              </div>
              <div className={style.btnGroup}>
                <a href="#" className={style.bookNowBtn}>
                  Book Now
                </a>
                <a
                  href="route.html"
                  id="btn-1"
                  className={style.viewDetailsBtn}
                >
                  View more
                </a>
              </div>
            </div>
          </div>

          <div className={style.cardHorizontal}>
            <div className={style.navbar}>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Train Name:</span>
                <span className={style.navbarValue}>Express 2</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Date:</span>
                <span className={style.navbarValue}>5th May, 2023</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Source:</span>
                <span className={style.navbarValue}>New Delhi</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Destination:</span>
                <span className={style.navbarValue}>Mumbai</span>
              </div>
            </div>
            <div className={style.cardDetails}>
              <div className={style.cardInfo}>
                <h2 className={style.cardTitle}>Train Name</h2>
                <p className={style.cardText}>Date: 10/05/2023</p>
                <p className={style.cardText}>Arrival Time: 00:00:00 AM</p>
                <p className={style.cardText}>Departure Time: 00:00:00 AM</p>
              </div>
              <div className={style.cardButtons}>
                <button className={style.btn} />
                Sleeper
                <button className={style.btn} />
                AC First Class
              </div>
              <div className={style.btnGroup}>
                <a href="#" className={style.bookNowBtn}>
                  Book Now
                </a>
                <a
                  href="route.html"
                  id="btn-1"
                  className={style.viewDetailsBtn}
                >
                  View more
                </a>
              </div>
            </div>
          </div>

          <div className={style.cardHorizontal}>
            <div className={style.navbar}>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Train Name:</span>
                <span className={style.navbarValue}>Express 2</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Date:</span>
                <span className={style.navbarValue}>5th May, 2023</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Source:</span>
                <span className={style.navbarValue}>New Delhi</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Destination:</span>
                <span className={style.navbarValue}>Mumbai</span>
              </div>
            </div>
            <div className={style.cardDetails}>
              <div className={style.cardInfo}>
                <h2 className={style.cardTitle}>Train Name</h2>
                <p className={style.cardText}>Date: 10/05/2023</p>
                <p className={style.cardText}>Arrival Time: 00:00:00 AM</p>
                <p className={style.cardText}>Departure Time: 00:00:00 AM</p>
              </div>
              <div className={style.cardButtons}>
                <button className={style.btn} />
                Sleeper
                <button className={style.btn} />
                AC First Class
              </div>
              <div className={style.btnGroup}>
                <a href="#" className={style.bookNowBtn}>
                  Book Now
                </a>
                <a
                  href="route.html"
                  id="btn-1"
                  className={style.viewDetailsBtn}
                >
                  View more
                </a>
              </div>
            </div>
          </div>

          <div className={style.cardHorizontal}>
            <div className={style.navbar}>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Train Name:</span>
                <span className={style.navbarValue}>Express 2</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Date:</span>
                <span className={style.navbarValue}>5th May, 2023</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Source:</span>
                <span className={style.navbarValue}>New Delhi</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Destination:</span>
                <span className={style.navbarValue}>Mumbai</span>
              </div>
            </div>
            <div className={style.cardDetails}>
              <div className={style.cardInfo}>
                <h2 className={style.cardTitle}>Train Name</h2>
                <p className={style.cardText}>Date: 10/05/2023</p>
                <p className={style.cardText}>Arrival Time: 00:00:00 AM</p>
                <p className={style.cardText}>Departure Time: 00:00:00 AM</p>
              </div>
              <div className={style.cardButtons}>
                <button className={style.btn} />
                Sleeper
                <button className={style.btn} />
                AC First Class
              </div>
              <div className={style.btnGroup}>
                <a href="#" className={style.bookNowBtn}>
                  Book Now
                </a>
                <a
                  href="route.html"
                  id="btn-1"
                  className={style.viewDetailsBtn}
                >
                  View more
                </a>
              </div>
            </div>
          </div>

          <div className={style.cardHorizontal}>
            <div className={style.navbar}>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Train Name:</span>
                <span className={style.navbarValue}>Express 2</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Date:</span>
                <span className={style.navbarValue}>5th May, 2023</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Source:</span>
                <span className={style.navbarValue}>New Delhi</span>
              </div>
              <div className={style.navbarItem}>
                <span className={style.navbarLabel}>Destination:</span>
                <span className={style.navbarValue}>Mumbai</span>
              </div>
            </div>
            <div className={style.cardDetails}>
              <div className={style.cardInfo}>
                <h2 className={style.cardTitle}>Train Name</h2>
                <p className={style.cardText}>Date: 10/05/2023</p>
                <p className={style.cardText}>Arrival Time: 00:00:00 AM</p>
                <p className={style.cardText}>Departure Time: 00:00:00 AM</p>
              </div>
              <div className={style.cardButtons}>
                <button className={style.btn} />
                Sleeper
                <button className={style.btn} />
                AC First Class
              </div>
              <div className={style.btnGroup}>
                <a href="#" className={style.bookNowBtn}>
                  Book Now
                </a>
                <a
                  href="route.html"
                  id="btn-1"
                  className={style.viewDetailsBtn}
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
