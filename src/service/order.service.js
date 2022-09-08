import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

export const getOrdersByPharmacy = async (
  pharmacyId,
  page,
  limit,
  orderBy,
  keyword
) => {
  const response = await getApi()
    .get(`/orders/pharmacies/${pharmacyId}`, {
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
