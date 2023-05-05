import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiLockAlt, BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { loginAdmin } from '../../services/admin.services';
import styles from './AdminLogin.module.css';

function AdminLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isLoading } = useMutation({
    mutationFn: (user) => loginAdmin(user.username, user.password),
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: () => {
      queryClient.refetchQueries(['user-status']);
      navigate('/');
    },
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Phone Number is Required'),
      password: Yup.string()
        .max(20, 'Password must be 20 characters of less')
        .required('Password is Required'),
    }),
    onSubmit: (values) => mutate(values),
  });

  return (
    <div className={styles.AdminLogin}>
      <div className="overlay"></div>
      <div className={styles.container}>
        <div className={`${styles.form} ${styles.login}`}>
          <span className="title">Admin Login</span>
          <form onSubmit={formik.handleSubmit}>
            <div
              className={`${styles.inputField} ${
                formik.touched.username && formik.errors.username
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <BiUser className={styles.icon} />
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
              Not a Admin, Contact IT Cell.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminLogin;
