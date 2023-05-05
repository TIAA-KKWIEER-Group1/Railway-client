import fakeRequest from './fakeRequest';

const getUserStatus = async () => {
  return fakeRequest({}, { isLoggedIn: false, isAdmin: false }).then(
    (response) => response.data,
  );
};

const loginUser = async (mobile, password) => {
  console.log(mobile, password);

  return fakeRequest({}, { isLoggedIn: true }).then(
    (response) => response.data,
  );
};

const registerUser = async (user, otp) => {
  console.log(user, otp);

  return fakeRequest({}, { isLoggedIn: false }).then(
    (response) => response.data,
  );
};

export { getUserStatus, loginUser, registerUser };
