import { LATENCY_IN_SECONDS } from './serverConfig';

async function fakeRequest(data, expectedResponse, isRejected = false) {
  const response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRejected) {
        return reject(new Error('Promise IsRejected'));
      }

      return resolve({ data: expectedResponse });
    }, LATENCY_IN_SECONDS * 1000);
  });

  return response;
}

export default fakeRequest;
