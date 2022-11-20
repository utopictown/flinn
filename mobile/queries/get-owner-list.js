import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

const getOwnerList = async ({ sortBy, pageParam }) => {
  try {
    const response = await axios.get(`${REACT_APP_BASE_URL}/owners?page=${pageParam}&sortBy=${sortBy}`);
    return response.data;
  } catch (error) {
    throw error.message;
  }
};

export default getOwnerList;
