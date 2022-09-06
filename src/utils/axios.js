import axios from "axios";
import constants from "../constants";

// import store from "../store";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzExZmU1ZmMwMmM0YzcwNzQ3Yzc3MzMiLCJlbWFpbCI6InN1bWVkaGFAZ21haWwuY29tIiwicm9sZSI6InBoYXJtYWN5IG93bmVyIiwicGhhcm1hY2llcyI6W3siX2lkIjoiNjMxMjA1NWQzNjFlMWJhYjY0OTZmZDMyIiwibmFtZSI6IlNhbWFyYXNpbmdoYSBQaGFybWFjeSJ9XSwiaWF0IjoxNjYyNDgzNzk3LCJleHAiOjE2NjI1NzAxOTd9.psRCHHkX-fFmPUlUeZg269PxOFKWYogohYy9ZOLUphg";

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
