import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

const getOwnerDetail = async ({ id }) => {
  try {
    const response = await axios.get(`${REACT_APP_BASE_URL}/owners/${id}`);
    return response.data;
  } catch (error) {
    throw error.message;
  }
};

export default getOwnerDetail;
