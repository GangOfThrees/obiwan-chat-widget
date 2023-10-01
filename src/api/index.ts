import Axios from "axios";

export const post = async (url, apiKey, payload) => {
  return Axios.post(url, payload, {
    headers: {
      "X-Api-Key": apiKey,
    },
  })
    .then(({ data }) => {
      return Promise.resolve(data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const get = async (url, apiKey) => {
  return Axios.get(url, {
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
  })
    .then(({ data }) => {
      return Promise.resolve(data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
