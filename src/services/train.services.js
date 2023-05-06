import axios from 'axios';
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

export { getTrainSearchData, getAllStations };
