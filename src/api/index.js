import axios from "axios";

let apiUrl = import.meta.env.VITE_ROTA_DIGITAL_API || ''

export const axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
})
