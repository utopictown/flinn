import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

export default async function removeFavorite(id) {
  try {
    const response = await axios.post(`${REACT_APP_BASE_URL}/owners/unfavorite/${id}`);
    return response.data;
  } catch (error) {
    throw error.message;
  }
}
