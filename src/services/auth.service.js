import axios from "axios";

const API_URL = "http://laravel-jwt-api.test/api/auth/";

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "login", {email, password})
            .then((response) => {
                if (response.data.success) {
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(name, email, password) {
        return axios.post(API_URL + "register", {
            name,
            email,
            password,
        }).then((response) => {
            if (response.data.success) {
                console.log("api call");
            }
            return response.data;
        }).catch(((reason) => {
            console.log(reason);
            return reason.data;
        } ));
    }
}

export default new AuthService();
