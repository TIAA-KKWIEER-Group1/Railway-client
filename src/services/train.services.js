import fakeRequest from './fakeRequest';

const getTrainSearchData = (filter) => {
  const trains = [{ name: 'boy' }, { name: 'girl' }];
  console.log(filter);

  return fakeRequest({}, trains).then((response) => response.data);
};

export { getTrainSearchData };
