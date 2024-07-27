import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000/users/login"
});

const authAPI = {
    login(email: string, password: string) {
        return instance.post("", {email, password});
    }
};

export default authAPI;