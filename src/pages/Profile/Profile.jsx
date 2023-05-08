import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { getUserProfile } from '../../services/user.services';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import styles from './Profile.module.css';

function Profile() {
  const user = useSelector((state) => state.user);

  // Fetching Profile data
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user-profile', user],
    queryFn: () => getUserProfile(),
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  console.log(data);

  return (
    <main className={styles.Profile}>
      <div className="container">
        <div>
          <h1 className="title">Profile</h1>
          <p>
            {data.profile.firstName} {data.profile.lastName}
          </p>
          <p>Email: {data.profile?.email}</p>
          <p>Mobile Number: {data.profile?.mobileNo}</p>
        </div>

        <div>
          <h2 className="title">Reservations</h2>
          {data.reservation?.length != 0 ? (
            data.reservation?.map((ticket) => (
              <div key={ticket._id}>
                {ticket._id}
                <div className={styles.ticketHeader}>
                  <h2>{ticket.trainId?.name}</h2>
                  <p>
                    {ticket.trainId?.source} to {ticket.trainId?.destination}
                  </p>
                </div>
                <div className={styles.passenger}>
                  <h3>Passengers</h3>
                </div>
              </div>
            ))
          ) : (
            <p>No Reservations Yet!!</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Profile;
