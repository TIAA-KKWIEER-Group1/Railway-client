import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { userActions } from '../redux/user/userSlice';
import { getUserStatus } from '../services/user.services';

const useUserStatus = () => {
  const dispatch = useDispatch();

  const { isLoading, isError } = useQuery(['user-status'], async () => {
    const data = await getUserStatus();

    if (!data.isLoggedIn) {
      dispatch(userActions.logout());
      return data;
    }

    // Server will send the data as admin or user
    if (data.isAdmin) {
      dispatch(userActions.loginAdmin({ data: data.admin }));
    } else {
      dispatch(userActions.loginUser({ data: data.user }));
    }

    return data;
  });

  return { isLoading, isError };
};

export default useUserStatus;
