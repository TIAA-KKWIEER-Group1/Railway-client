import axios from 'axios';
import { BASE_API_URL } from './serverConfig';

const getTrainSearchData = (filter) => {
  const date = new Date(filter.date);

  const url = new URL(`${BASE_API_URL}/train/search`);
  url.searchParams.set('source', filter.source);
  url.searchParams.set('destination', filter.destination);
  url.searchParams.set(
    'date',
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
  );

  return axios.get(url.href).then((response) => response.data.data);
};

const getAllStations = () => {
  const url = BASE_API_URL + '/train/allstations';
  return axios.get(url).then((response) => response.data.data);
};

const getTrainDetail = (id) => {
  const url = BASE_API_URL + `/train/stations/${id}`;
  return axios.get(url).then((response) => response.data.data);
};

const makeTrainReservation = (data) => {
  const url = BASE_API_URL + `/ticket/book`;
  return axios
    .post(url, data, { withCredentials: true })
    .then((response) => response.data);
};

const getTrainStatus = (id) => {
  const url = BASE_API_URL + `/train/train-status/${id}`;
  return axios.get(url).then((response) => response.data);
};

const updateTrainData = (data) => {
  const url = BASE_API_URL + `/admin/update-train`;
  return axios
    .put(url, data, { withCredentials: true })
    .then((response) => response.data);
};

export {
  getTrainSearchData,
  getAllStations,
  getTrainDetail,
  makeTrainReservation,
  getTrainStatus,
  updateTrainData,
};
