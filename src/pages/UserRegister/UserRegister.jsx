import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { registerUser } from '../../services/user.services';
import styles from './UserRegister.module.css';

function UserRegister() {
  const [otp, setOtp] = useState('');

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: (user) => registerUser(user, otp),
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: () => {
      queryClient.refetchQueries(['user-status']);
      navigate('/');
    },
  });

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      aadhaarNo: '',
      address: '',
      language: '',
      gender: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid Email Address').required('Required'),
      phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
      password: Yup.string().required('Required'),
      confirmPassword: Yup.string()
        .when('password', {
          is: (val) => val && val.length > 0,
          then: () =>
            Yup.string().oneOf(
              [Yup.ref('password')],
              'Confirm Password does not match',
            ),
        })
        .required('Confirm Password is required'),
      aadhaarNo: Yup.number().required('Required'),
      address: Yup.string().required('Required'),
      language: Yup.string().required('Required'),
      gender: Yup.string().required('Required'),
    }),
    onSubmit: (values) => mutate(values),
  });

  const getOtp = () => {
    // TODO: GET OTP
    console.log('Get the OTP');
  };

  return (
    <div className={styles.UserRegister}>
      <div className={styles.container}>
        <div className="title">Registration</div>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.userDetails}>
            <div
              className={`${styles.inputField} ${
                formik.touched.firstName && formik.errors.firstName
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <span className={styles.details}>
                First Name
                <span className="required">*</span>
              </span>
              <input
                type="text"
                placeholder="Enter your first name "
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              className={`${styles.inputField} ${
                formik.touched.lastName && formik.errors.lastName
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <span className={styles.details}>
                Last Name
                <span className="required">*</span>
              </span>
              <input
                type="text"
                placeholder="Enter your last name "
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              className={`${styles.inputField} ${
                formik.touched.email && formik.errors.email
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <span className={styles.details}>Email</span>
              <input
                type="email"
                placeholder="Confirm your email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              className={`${styles.inputField} ${
                formik.touched.phone && formik.errors.phone
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <span className={styles.details}>
                Phone
                <span className="required">*</span>
              </span>
              <input
                type="tel"
                placeholder="Enter your Phone "
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              className={`${styles.inputField} ${
                formik.touched.password && formik.errors.password
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <span className={styles.details}>
                Password
                <span className="required">*</span>
              </span>
              <input
                type="password"
                placeholder="Enter your password "
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              className={`${styles.inputField} ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <span className={styles.details}>
                Confirm Password
                <span className="required">*</span>
              </span>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              className={`${styles.inputField} ${
                formik.touched.aadhaarNo && formik.errors.aadhaarNo
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <span className={styles.details}>
                Aadhaar No
                <span className="required">*</span>
              </span>
              <input
                type="number"
                placeholder="Enter your Aadhaar "
                name="aadhaarNo"
                value={formik.values.aadhaarNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              className={`${styles.inputField} ${
                formik.touched.address && formik.errors.address
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <span className={styles.details}>Address</span>
              <input
                type="text"
                placeholder="Enter your Address "
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div
              className={`${styles.inputField} ${
                formik.touched.language && formik.errors.language
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <span className={styles.details}>
                Preferred Language
                <span className="required">*</span>
              </span>
              <select
                name="language"
                value={formik.values.language}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Language</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
            <div
              className={`${styles.inputField} ${
                formik.touched.gender && formik.errors.gender
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <span className={styles.details}>
                Gender
                <span className="required">*</span>
              </span>
              <select
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className={`${styles.inputField} ${styles.otpContainer}`}>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="button" onClick={getOtp}>
              Get OTP
            </button>
          </div>

          <button type="submit" className={styles.button} disabled={isLoading}>
            Register
          </button>

          <div className={styles.loginSignUp}>
            <span className={styles.signUpText}>
              Not a member?
              <Link to="/user/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
