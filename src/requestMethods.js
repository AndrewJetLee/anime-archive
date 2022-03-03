import axios from "axios";

export const BASE_URL = "http://localhost:4000/api/"
export const ANIME_API = "http://kitsu.io/api/edge/"
export const JIKAN_API = "https://api.jikan.moe/v4/"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, 
    credentials: "include"
})

export const apiRequest = axios.create({
    baseURL: ANIME_API,
})

export const jikanRequest = axios.create({
    baseURL: JIKAN_API,
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     'Content-Type': 'application/json'
    // }
})