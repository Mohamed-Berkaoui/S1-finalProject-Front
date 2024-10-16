import axios from "axios";

const appAxios = axios.create({
    baseURL: 'http://localhost:8000'
  });
  export const     baseURL= 'http://localhost:8000'
  export default appAxios