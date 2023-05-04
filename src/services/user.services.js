import fakeRequest from './fakeRequest';

const getUserStatus = async () => {
  return fakeRequest({}, { isLoggedIn: false, isAdmin: false }).then(
    (response) => response.data,
  );
};

export { getUserStatus };
