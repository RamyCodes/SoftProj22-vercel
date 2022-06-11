import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://softproj22.herokuapp.com/api/"
})
