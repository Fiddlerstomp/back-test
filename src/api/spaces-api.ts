import axios from "axios";
import {token} from "../App"

const instance = axios.create({
    baseURL: "http://localhost:8000/spaces"
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = token;
    return config;
});

const spacesAPI = {
    createSpace(title: string) {
        return instance.post("", {title});
    }
};

export default spacesAPI;