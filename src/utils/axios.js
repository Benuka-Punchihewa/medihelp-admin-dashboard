import axios from "axios";
import constants from "../constants";

// import store from "../store";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzExZmU1ZmMwMmM0YzcwNzQ3Yzc3MzMiLCJlbWFpbCI6InN1bWVkaGFAZ21haWwuY29tIiwicm9sZSI6InBoYXJtYWN5IG93bmVyIiwicGhhcm1hY2llcyI6W3siX2lkIjoiNjMxMjA1NWQzNjFlMWJhYjY0OTZmZDMyIiwibmFtZSI6IlNhbWFyYXNpbmdoYSBQaGFybWFjeSJ9LHsiX2lkIjoiNjMxNzdmNzM0NDgxZDU0ZTE3M2IyMDY3IiwibmFtZSI6IkdheWFuIFBoYXJtYWN5In0seyJfaWQiOiI2MzE4YzdhMzhhOWQ1ODJjNDk5MDJiNTgiLCJuYW1lIjoiTmV3IENlbnRyYWwgUGhhcm1hY3kgIn0seyJfaWQiOiI2MzE4Yzg3ZThhOWQ1ODJjNDk5MDJiNjIiLCJuYW1lIjoiU2FmZXdheSBDaGVtaXN0IFBoYXJtYWN5In0seyJfaWQiOiI2MzE4Yzk4YThhOWQ1ODJjNDk5MDJiNmUiLCJuYW1lIjoiT3NpbCBQaGFybWFjeSJ9XSwiaWF0IjoxNjYyNTczNTUxLCJleHAiOjE2NjI2NTk5NTF9.hU0ZxaIkt8t5LMwuck3bSxO4q8YEPzvPIjBwaxvYqag";

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
