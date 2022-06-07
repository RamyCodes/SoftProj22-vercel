import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://soft22.herokuapp.com/api/"
})
