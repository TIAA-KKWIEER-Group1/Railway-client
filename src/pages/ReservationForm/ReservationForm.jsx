import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import ReservationSuccessModal from '../../components/ReservationSuccessModal/ReservationSuccessModal';
import {
  getTrainDetail,
  makeTrainReservation,
} from '../../services/train.services';
import Loading from '../Loading/Loading';
import styles from './ReservationForm.module.css';

function ReservationForm() {
  const params = useParams();

  const [showModal, setShowModal] = useState(false);

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
        if (error?.response?.data?.message) {
          toast.error(error?.response?.data?.message);
        } else {
          toast.error('Error Booking train');
        }
      }
      setIsLoading(false);
    };

    fetchData();
  }, [params]);

  const [passengers, setPassengers] = useState([
    {
      firstName: '',
      lastName: '',
      middleName: '',
      age: 0,
      gender: '',
      coach: '',
    },
  ]);

  const addDetail = () => {
    let passenger = {
      firstName: '',
      lastName: '',
      middleName: '',
      age: '',
      gender: '',
      coach: '',
    };

    setPassengers([...passengers, passenger]);
  };

  const deleteDetail = () => {
    let data = [...passengers];
    data.pop();
    setPassengers(data);
  };

  const handleReservation = async () => {
    // submit the reservation form
    try {
      const data = {
        trainId: trainDetail._id,
        passengerDetails: passengers,
      };

      await makeTrainReservation(data);

      toast.success('Reservation Successful');
      setShowModal(true);
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  if (isLoading) return <Loading />;

  return (
    <>
      {showModal ? <ReservationSuccessModal /> : null}

      <div className={styles.container}>
        <div className={styles.title}>Reservation Form</div>
        <div className={styles.header}>
          <span className={styles.details}>{trainDetail.name} </span>(
          <span className={styles.details}>{trainDetail.no}</span>)
          <p>
            {trainDetail.source} to {trainDetail.destination}
          </p>
        </div>

        <div className={styles.passengerForm}>
          <div className={styles.form}>
            {passengers.map((passenger, index) => (
              <div className={styles.passengerForm} key={index}>
                <div className={styles.title}>Passenger {index + 1}</div>
                <div className={styles.userdetails}>
                  <div className={styles.inputBox}>
                    <span className={styles.details}>First Name</span>
                    <input
                      type="text"
                      placeholder="Enter first name "
                      required
                      value={passenger.firstName}
                      onChange={(e) => {
                        const newPassengers = structuredClone(passengers);
                        newPassengers[index].firstName = e.target.value;
                        setPassengers(newPassengers);
                      }}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    <span className={styles.details}>Middle Name</span>
                    <input
                      type="text"
                      placeholder="Enter  Middle name "
                      required
                      value={passenger.middleName}
                      onChange={(e) => {
                        const newPassengers = structuredClone(passengers);
                        newPassengers[index].middleName = e.target.value;
                        setPassengers(newPassengers);
                      }}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    <span className={styles.details}>Last Name</span>
                    <input
                      type="text"
                      placeholder="Enter last name "
                      required
                      value={passenger.lastName}
                      onChange={(e) => {
                        const newPassengers = structuredClone(passengers);
                        newPassengers[index].lastName = e.target.value;
                        setPassengers(newPassengers);
                      }}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    <span className={styles.details}>Age</span>
                    <input
                      type="number"
                      placeholder="Enter age"
                      required
                      value={passenger.age}
                      onChange={(e) => {
                        const newPassengers = structuredClone(passengers);
                        newPassengers[index].age = e.target.value;
                        setPassengers(newPassengers);
                      }}
                    />
                  </div>

                  <div className={styles.inputBox}>
                    <span className={styles.details}>Gender</span>
                    <select
                      name="gender"
                      value={passenger.gender}
                      onChange={(e) => {
                        const newPassengers = structuredClone(passengers);
                        newPassengers[index].gender = e.target.value;
                        setPassengers(newPassengers);
                      }}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.inputBox}>
                    <span className={styles.details}>Select Class</span>
                    <select
                      name="class"
                      value={passenger.coach}
                      onChange={(e) => {
                        const newPassengers = structuredClone(passengers);
                        newPassengers[index].coach = e.target.value;
                        setPassengers(newPassengers);
                      }}
                    >
                      <option value="">Select Class</option>
                      <option value="ac">AC </option>
                      <option value="sleeper">Sleeper (SL)</option>
                      <option value="general">General</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.actionButtons}>
              <button
                className={`default-button ${styles.addBtn}`}
                type="button"
                onClick={addDetail}
              >
                ADD
              </button>
              <button
                className={`default-button ${styles.deleteBtn}`}
                onClick={deleteDetail}
              >
                Delete
              </button>
            </div>

            <div className={styles.button}>
              <input type="submit" value="Book" onClick={handleReservation} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReservationForm;
