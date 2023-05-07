import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  AiFillPhone,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { loginUser } from '../../services/user.services';
import styles from './UserLogin.module.css';

function UserLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isLoading } = useMutation({
    mutationFn: (user) => loginUser(user.mobile, user.password),
    onError: (error) => {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error('Something went wrong');
      }
      // toast.error(error.response.data.message);
    },
    onSuccess: () => {
      toast.success('Login Successful');
      queryClient.refetchQueries(['user-status']);
      navigate('/');
    },
  });

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      mobile: '',
      password: '',
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Phone Number is Required'),
      password: Yup.string()
        .max(20, 'Password must be 20 characters of less')
        .required('Password is Required'),
    }),
    onSubmit: (values) => mutate(values),
  });

  return (
    <div className={styles.UserLogin}>
      <div className="overlay"></div>
      <div className={styles.container}>
        <div className={`${styles.form} ${styles.login}`}>
          <span className="title">Login</span>
          <form onSubmit={formik.handleSubmit}>
            <div
              className={`${styles.inputField} ${
                formik.touched.mobile && formik.errors.mobile
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <input
                type="text"
                placeholder="Mobile Number"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <AiFillPhone className={styles.icon} />
            </div>
            <div
              className={`${styles.inputField} ${
                formik.touched.password && formik.errors.password
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.password}
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <BiLockAlt className={styles.icon} />
              {showPassword ? (
                <AiOutlineEye
                  className={`${styles.icon} ${styles.eyeIcon}`}
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className={`${styles.icon} ${styles.eyeIcon}`}
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <div className={styles.checkboxText}>
              <button type="button" className={styles.forgotPassword}>
                Forgot password?
              </button>
            </div>
            <div className={`${styles.inputField} ${styles.button}`}>
              <input type="submit" value="Login" disabled={isLoading} />
            </div>
          </form>

          <div className={styles.loginSignUp}>
            <span className={styles.signUpText}>
              Not a member?
              <Link to="/user/register">SignUp Now</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserLogin;
