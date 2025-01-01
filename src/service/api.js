import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("autogate:#m4ritime6atew4y"),
    },
});

export default api;
