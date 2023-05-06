import axios from 'axios';
import { BASE_API_URL } from './serverConfig';

const loginAdmin = (username, password) => {
  const url = BASE_API_URL + '/admin/login';
  const body = {
    userName: username,
    password,
  };

  return axios.post(url, body, { withCredentials: true });
};

export { loginAdmin };
