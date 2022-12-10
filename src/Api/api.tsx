import axios from "axios";

const httpService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error?.response?.data;
  },
);

export default httpService;
