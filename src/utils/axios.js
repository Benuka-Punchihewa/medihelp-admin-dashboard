import axios from "axios";
import constants from "../constants";

// import store from "../store";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBiOWIzZjViYzg5ZDBkYWJkZWNlZmYiLCJlbWFpbCI6ImJlbnVrYUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJwaGFybWFjaWVzIjpbXSwiaWF0IjoxNjYyNjYxNDY4LCJleHAiOjE2NjI3NDc4Njh9.ZjMeBPT29SdpBP8Tg4363zn8K_y-f_Le0lYptdCS7wo";

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
