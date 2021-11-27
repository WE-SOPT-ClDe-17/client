import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const serverClient = axios.create({
  baseURL: "https://asia-northeast3-tumblbug-sopt.cloudfunctions.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});
