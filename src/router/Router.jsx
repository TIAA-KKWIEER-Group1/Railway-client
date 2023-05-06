import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import useUserStatus from '../hooks/useUserStatus';
import Admin from '../pages/Admin/Admin';
import AdminLogin from '../pages/AdminLogin/AdminLogin';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Loading from '../pages/Loading/Loading';
import NotFound from '../pages/NotFound/NotFound';
import ReservationForm from '../pages/ReservationForm/ReservationForm';
import TrainDetail from '../pages/TrainDetail/TrainDetail';
import TrainSearch from '../pages/TrainSearch/TrainSearch';
import UserLogin from '../pages/UserLogin/UserLogin';
import UserRegister from '../pages/UserRegister/UserRegister';

function Router() {
  const user = useSelector((state) => state.user);

  const { pathname } = useLocation();
  const { isLoading, isError } = useUserStatus();

  // Function to scroll to top when url changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Routes>
      {/* Home */}
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      {!user.isLoggedIn ? (
        <>
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </>
      ) : null}

      {/* Admin Page */}
      {user.isLoggedIn && user.isAdmin ? (
        <Route path="/admin" element={<Admin />} />
      ) : null}

      {/* User Pages */}
      <Route path="/trains" element={<TrainSearch />} />
      <Route path="/trains/:id" element={<TrainDetail />} />
      <Route path="/train/reservation/:id" element={<ReservationForm />} />

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
