import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import {
  getAllStations,
  getTrainSearchData,
} from '../../services/train.services';
import styles from './TrainSearch.module.css';

function TrainSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  let filter = {
    date: searchParams.get('date') || '',
    source: searchParams.get('source') || '',
    destination: searchParams.get('destination') || '',
  };

  // Fetching train data
  const {
    data: trainDataList,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['train-search', filter],
    queryFn: () => getTrainSearchData(filter),
  });

  // Fetching all train stations
  const { data: allStations } = useQuery({
    queryKey: ['station-list'],
    queryFn: () => getAllStations(),
  });

  console.log(trainDataList);

  return (
    <div className={styles.TrainSearch}>
      <div className={styles.searchContainer}>
        <select
          type="text"
          name="destination"
          value={filter.destination}
          onChange={(e) => {
            setSearchParams({ ...filter, destination: e.target.value });
          }}
        >
          <option value="">Destination</option>
          {allStations?.map((station) => (
            <option value={station} key={station}>
              {station}
            </option>
          ))}
        </select>
        <select
          type="text"
          name="source"
          value={filter.source}
          onChange={(e) => {
            setSearchParams({ ...filter, source: e.target.value });
          }}
        >
          <option value="">Source</option>
          {allStations?.map((station) => (
            <option value={station} key={station}>
              {station}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="date"
          value={filter.date}
          onChange={(e) => {
            setSearchParams({ ...filter, date: e.target.value });
          }}
        />
      </div>

      <main>
        <div className={styles.container}>
          {isLoading || isFetching ? (
            <p>Loading...</p>
          ) : (
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
          )}
        </div>
      </main>
    </div>
  );
}

export default TrainSearch;
