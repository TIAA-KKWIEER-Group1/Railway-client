import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { getTrainStatus } from '../../services/train.services';
import styles from './TrainStatus.module.css';

function TrainStatus() {
  const [trainId, setTrainId] = useState('');
  const [statusData, setStatusData] = useState(null);

  const handleTrainStatusSearch = async () => {
    try {
      const data = await getTrainStatus(trainId);
      console.log(data);
      setStatusData(data);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong...');
    }
  };

  return (
    <main className={styles.TrainStatus}>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={trainId}
          onChange={(e) => setTrainId(e.target.value)}
        />

        <button onClick={handleTrainStatusSearch}>Search</button>
      </div>

      {statusData?.isEnded && statusData?.isStarted ? (
        <p>Train Has passed</p>
      ) : null}

      {!statusData?.isStarted && !statusData?.isEnded ? (
        <p>Not yet arrived</p>
      ) : null}

      {statusData?.isStarted && !statusData?.isEnded ? (
        <div>
          <div>
            <p>Last Halt Time: {statusData.lastHalt}</p>
            <p>Last visited station: {statusData.lastStation}</p>
            <p>Next station: {statusData.nextStation}</p>
          </div>

          <table className={styles.styledTable}>
            <thead>
              <tr>
                <th>Station</th>
                <th>Arrival Date</th>
                <th>Arrival Time</th>
                <th>Departure Date</th>
                <th>Departure Time</th>
              </tr>
            </thead>
            <tbody>
              {statusData?.stations?.map((station) => (
                <tr key={station.seatNo}>
                  <td>{station.name}</td>
                  <td>{station.arrivalDate}</td>
                  <td>{station.arrivalTime}</td>
                  <td>{station.departureDate}</td>
                  <td>{station.departureTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </main>
  );
}

export default TrainStatus;
