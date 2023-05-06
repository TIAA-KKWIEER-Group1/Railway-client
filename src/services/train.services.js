import axios from 'axios';
import fakeRequest from './fakeRequest';
import { BASE_API_URL } from './serverConfig';

const getTrainSearchData = (filter) => {
  const date = new Date(filter.date);

  const url = new URL(`${BASE_API_URL}/train/search`);
  url.searchParams.set('source', filter.source);
  url.searchParams.set('destination', filter.destination);
  url.searchParams.set(
    'date',
    `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
  );

  console.log(url.href);

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
  return fakeRequest(data, { message: 'done' }).then(
    (response) => response.data,
  );
};

export {
  getTrainSearchData,
  getAllStations,
  getTrainDetail,
  makeTrainReservation,
};
