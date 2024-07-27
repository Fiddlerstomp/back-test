import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000/spaces"
});

const spacesAPI = {
    createSpace(title: string) {
        return instance.post("", {title});
    }
};

export default spacesAPI;