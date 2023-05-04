import { Route, Routes } from 'react-router-dom';
import Admin from '../pages/Admin/Admin';
import AdminLogin from '../pages/AdminLogin/AdminLogin';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import TrainDetail from '../pages/TrainDetail/TrainDetail';
import TrainSearch from '../pages/TrainSearch/TrainSearch';
import UserLogin from '../pages/UserLogin/UserLogin';
import UserRegister from '../pages/UserRegister/UserRegister';

function Router() {
  return (
    <Routes>
      {/* Home */}
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin Page */}
      <Route path="/admin" element={<Admin />} />

      {/* User Pages */}
      <Route path="/trains" element={<TrainSearch />} />
      <Route path="/trains/:id" element={<TrainDetail />} />

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
