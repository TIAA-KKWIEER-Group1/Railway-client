import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../redux/user/userSlice';
import { logoutUser } from '../../services/user.services';

// eslint-disable-next-line react/prop-types
function LogoutButton({ className, children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => logoutUser(),
    onError: () => {
      toast.error('Internal Server Error');
    },
    onSuccess: () => {
      queryClient.refetchQueries(['user-status']);
      dispatch(userActions.logout());
      navigate('/');
    },
  });

  return (
    <button
      type="button"
      className={`${className}`}
      disabled={isLoading}
      onClick={() => mutate()}
    >
      {children}
    </button>
  );
}

export default LogoutButton;
