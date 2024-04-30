import axios from "axios";
const apiKey = import.meta.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
  headers: {
    "Content-Type": "application/json",
    'Authorization': apiKey
  },
});

export default axiosInstance;