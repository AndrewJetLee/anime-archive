import axios from "axios";

export const BASE_URL = "http://localhost:4000/api/"
export const ANIME_API = "http://kitsu.io/api/edge/"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, 
    credentials: "include"
})

export const apiRequest = axios.create({
    baseURL: ANIME_API,
})