import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

const getMaster = async () => {
  try {
    const response = await axios.get(`${REACT_APP_BASE_URL}/masters`);
    return response.data;
  } catch (error) {
    throw error.message;
  }
};

export default getMaster;
