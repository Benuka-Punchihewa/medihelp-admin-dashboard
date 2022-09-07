import { getApi} from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

export const createGlobalMedicine = async (data) => {
  const response = await getApi()
    .post("/global-medicines", data)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

export const getGlobalMedicines = async (page, limit, orderBy) => {
  const response = await getApi()
    .get("/global-medicines", {
      params: {
        page,
        limit,
        orderBy,
      },
    })
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
