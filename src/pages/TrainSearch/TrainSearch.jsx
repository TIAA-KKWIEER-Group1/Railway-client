import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import TrainCard from '../../components/TrainCard/TrainCard';
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

  return (
    <div className={styles.TrainSearch}>
      <div className={styles.searchContainer}>
        <div className={styles.inputContainer}>
          <label>Source</label>
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
        </div>

        <div className={styles.inputContainer}>
          <label>Destination</label>
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
        </div>

        <div className={styles.inputContainer}>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={filter.date}
            onChange={(e) => {
              setSearchParams({ ...filter, date: e.target.value });
            }}
          />
        </div>
      </div>

      {trainDataList?.length == 0 ? (
        <p className={styles.noTrainFound}>No Trains Found</p>
      ) : null}

      <main>
        <div className={styles.container}>
          {isLoading || isFetching ? (
            <p>Loading...</p>
          ) : (
            trainDataList.map((train) => (
              <TrainCard key={train._id} train={train} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default TrainSearch;
