import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { getTrainDetail } from '../../services/train.services';
import canBookTicket from '../../utils/canBookTicket';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import styles from './TrainDetail.module.css';

function TrainDetail() {
  const params = useParams();

  // Get train details when state is loaded
  const [trainDetail, setTrainDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrainDetail(params.id);
        setTrainDetail(data);
      } catch (error) {
        console.log(error);
        toast.error('Error Loading Train Detail');
      }
      setIsLoading(false);
    };

    fetchData();
  }, [params]);

  if (isLoading) return <Loading />;
  if (!trainDetail) return <Error />;

  return (
    <main className={styles.TrainDetail}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.firstContainer}>
            <div className={styles.containerItem}>
              <span className={styles.containerLabel}>Train Name:</span>
              <span className={styles.containerValue}>{trainDetail.name}</span>
            </div>
            <div className={styles.containerItem}>
              <span className={styles.containerLabel}>From:</span>
              <span className={styles.containerValue}>
                {trainDetail.source}
              </span>
            </div>
            <div className={styles.containerItem}>
              <span className={styles.containerLabel}>To:</span>
              <span className={styles.containerValue}>
                {trainDetail.destination}
              </span>
            </div>
            <div className={styles.containerItem}>
              <span className={styles.containerLabel}>Date:</span>
              <span className={styles.containerValue}>
                {trainDetail.sourceDepartureDate}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.subContainer}>
          <div className={styles.tableContainer}>
            <table className={styles.styledTable}>
              <thead>
                <tr>
                  <th>Station</th>
                  <th>Arrival Date</th>
                  <th>Arrival Time</th>
                  <th>Departure Date</th>
                  <th>Departure Time</th>
                  <th>Halt Time</th>
                </tr>
              </thead>
              <tbody>
                {trainDetail?.stations?.map((station, index) => (
                  <tr key={index}>
                    <td>{station.name}</td>
                    <td>{station.arrivalDate}</td>
                    <td>{station.arrivalTime}</td>
                    <td>{station.departureDate}</td>
                    <td>{station.departureTime}</td>
                    <td>{station.haltTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {canBookTicket(
          trainDetail.sourceArrivalDate,
          trainDetail.sourceArrivalTime,
        ) ? (
          <Link
            to={`/train/reservation/${trainDetail._id}`}
            className={`default-button ${styles.bookButton}`}
          >
            Book Now
          </Link>
        ) : (
          <button
            onClick={() => toast.error('Can only book 3 Hour prior')}
            className={`default-button ${styles.bookButton}`}
          >
            Book Now
          </button>
        )}
      </div>
    </main>
  );
}

export default TrainDetail;
