import axios from "axios";
import type { RegisterDto } from "../ds/RegisterDto";
import type { LoginDto } from "../ds/LoginDto";

const AUTH_BACKEND_URL = "http://localhost:8080/api/auth";

export const register = (user:RegisterDto) => {
    return axios.post<void>(`${AUTH_BACKEND_URL}/register`, user);
}

export const login = (user:LoginDto) => {
    return axios.post<string>(`${AUTH_BACKEND_URL}/login`, user);
}

export const setLoggedInUserName = (username: string) => {
    return sessionStorage.setItem("loggedInUser", username);
}

export const getLoggedInUserName = () => {
    return sessionStorage.getItem("loggedInUser");
}

export const isLoggedIn = () => {
    return getLoggedInUserName() !== null;
}

export const setToken = (token: string) => {
     localStorage.setItem("token", token);
}

export const getToken = () => {
    return localStorage.getItem("token");
}

export const loggedOut = () => {
    sessionStorage.clear();
    localStorage.clear();
}