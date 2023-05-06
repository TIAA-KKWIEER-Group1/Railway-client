import axios from 'axios';
import { BASE_API_URL } from './serverConfig';

const getUserStatus = () => {
  const url = BASE_API_URL + '/user/status';
  return axios
    .get(url, { withCredentials: true })
    .then((response) => response.data);
};

const loginUser = (mobileNo, password) => {
  const url = BASE_API_URL + '/user/login';
  const body = {
    mobileNo,
    password,
  };

  return axios.post(url, body, { withCredentials: true });
};

const registerUser = (user, otp) => {
  const url = BASE_API_URL + '/user/register/verify';
  const body = {
    otp,
    firstName: user.firstName,
    lastName: user.lastName,
    mobileNo: user.phone,
    password: user.password,
    email: user.email,
  };

  return axios.post(url, body);
};

const getRegisterOTP = (mobileNo) => {
  const url = BASE_API_URL + '/user/register/sendotp';
  const body = { mobileNo };

  return axios.post(url, body);
};

const logoutUser = () => {
  const url = BASE_API_URL + '/user/logout';
  return axios.post(url, {}, { withCredentials: true });
};

export { getUserStatus, loginUser, registerUser, getRegisterOTP, logoutUser };
