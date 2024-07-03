import { token } from "@/store/client/store";
import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://192.168.0.133/VetailAuth_API/api/",
});

export const authJsonHeader = (file?: boolean) => {
  return {
    "Content-Type": file ? "multipart/form-data" : "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
};
