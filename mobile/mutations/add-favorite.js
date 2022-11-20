import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

export default async function addFavorite(id) {
  try {
    const response = await axios.post(`${REACT_APP_BASE_URL}/owners/favorite/${id}`);
    return response.data;
  } catch (error) {
    throw error.message;
  }
}
