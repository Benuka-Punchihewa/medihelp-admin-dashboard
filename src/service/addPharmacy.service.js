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
