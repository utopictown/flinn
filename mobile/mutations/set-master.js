import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

export default async function setMaster(id) {
  try {
    console.log("ymomomoo");
    const response = await axios.post(`${REACT_APP_BASE_URL}/masters`, { ownerId: id });
    return response.data;
  } catch (error) {
    throw error.response.data.message.join("\n");
  }
}
