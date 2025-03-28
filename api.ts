import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",  // Mikroservis URL'i
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
