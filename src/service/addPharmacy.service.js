import { getApi} from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

export const createPharmacy = async (data) => {
  const response = await getApi()
    .post("/pharmacies", data)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

export const getallPharmacies = async (page, limit, orderBy,keyword) => {
  const response = await getApi()
    .get("/pharmacies", {
      params: {
        page,
        limit,
        orderBy,
        keyword,
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
