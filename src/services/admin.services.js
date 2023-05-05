import fakeRequest from './fakeRequest';

const loginAdmin = async (email, password) => {
  console.log(email, password);
  return fakeRequest({}, { isLoggedIn: true }).then(
    (response) => response.data,
  );
};

export { loginAdmin };
