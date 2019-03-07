import Config from "../../server/config";
import axios from "axios";
import FormData from "form-data";

export const API_URL =
  typeof window === "undefined" || process.env.NODE_ENV === "test"
    ? process.env.BASE_URL ||
      `http://localhost:${process.env.PORT || Config.port}/api`
    : "/api";

export default function callApiFile(endpoint, method = "post", file) {
  const formData = new FormData();
  formData.append("file", file);
  return axios
    .post(`${API_URL}/${endpoint}`, formData, {
      headers: { "content-type": "multipart/form-data" }
    })
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
    .then(response => response, error => error);
}
