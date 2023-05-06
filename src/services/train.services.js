import axios from 'axios';
import fakeRequest from './fakeRequest';
import { BASE_API_URL } from './serverConfig';

const getTrainSearchData = (filter) => {
  const trains = [{ name: 'boy' }, { name: 'girl' }];
  console.log(filter);

  return fakeRequest({}, trains).then((response) => response.data);
};

const getAllStations = () => {
  const url = BASE_API_URL + '/train/allstations';
  return axios.get(url).then((response) => response.data.data);
};

export { getTrainSearchData, getAllStations };
