import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsArrowDownUp } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styles from './Banner.module.css';

function Banner() {
  const navigate = useNavigate();

  const [searchTrainData, setSearchTrainData] = useState({
    source: '',
    destination: '',
    date: '',
  });

  const handleSwapSourceAndDestination = () => {
    const data = { ...searchTrainData };
    setSearchTrainData({
      date: data.date,
      source: data.destination,
      destination: data.source,
    });
  };

  const handleTrainSearch = () => {
    if (
      !searchTrainData.date ||
      !searchTrainData.source ||
      !searchTrainData.destination
    ) {
      toast.error('Please enter valid data');
      return;
    }

    navigate(
      `/trains?date=${encodeURIComponent(
        searchTrainData.date,
      )}&source=${encodeURIComponent(
        searchTrainData.source,
      )}&destination=${encodeURIComponent(searchTrainData.destination)}`,
    );
  };

  return (
    <section className={styles.banner}>
      <div className={styles.trainSearchFormContainer}>
        <h2>Railway Reservation</h2>
        <div className={styles.trainSearchForm}>
          <div className={styles.inputContainer}>
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={searchTrainData.date}
              onChange={(e) =>
                setSearchTrainData({ ...searchTrainData, date: e.target.value })
              }
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Source</label>
            <input
              type="text"
              name="source"
              value={searchTrainData.source}
              onChange={(e) =>
                setSearchTrainData({
                  ...searchTrainData,
                  source: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.arrowIcon}>
            <BsArrowDownUp
              onClick={handleSwapSourceAndDestination}
              className={styles.swapIcon}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Destination</label>
            <input
              type="text"
              name="destination"
              value={searchTrainData.destination}
              onChange={(e) =>
                setSearchTrainData({
                  ...searchTrainData,
                  destination: e.target.value,
                })
              }
            />
          </div>
          <button
            type="button"
            className={styles.buttonAvailability}
            onClick={handleTrainSearch}
          >
            Check Availability
          </button>
        </div>
      </div>
      <div className={styles.bannerDetail}>
        <h1 className={styles.heading}>MAKE YOUR RESERVATION</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet,
          felis in vulputate malesuada, orci tellus porta tellus, vitae euismod
          risus purus sit amet enim.
        </p>
      </div>
    </section>
  );
}

export default Banner;
