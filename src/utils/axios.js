import axios from "axios";
import constants from "../constants";

// import store from "../store";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBiOWIzZjViYzg5ZDBkYWJkZWNlZmYiLCJlbWFpbCI6ImJlbnVrYUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJwaGFybWFjaWVzIjpbXSwiaWF0IjoxNjYyNDAzNDEzLCJleHAiOjE2NjI0ODk4MTN9.j-eAeARJpjb5RHgvToKaUZBHJeMh2Fxv3sgT2bT-kio";

export const getApi = () => {
  //   const newState = store.getState();
  //   const token = newState ? newState.auth.token : null;
  return axios.create({
    baseURL: constants.API_BASE_URL,
    headers: {
      Authorization: token ? "Bearer " + token : null,
      "Content-type": "application/json",
    },
  });
};

export const getApiForFormData = () => {
  //   const newState = store.getState();
  //   const token = newState ? newState.auth.token : null;
  return axios.create({
    baseURL: constants.API_BASE_URL,
    headers: {
      Authorization: token ? "Bearer " + token : null,
      "Content-type": "multipart/form-data",
    },
  });
};
