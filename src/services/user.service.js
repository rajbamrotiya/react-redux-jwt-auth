import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://laravel-jwt-api.test/api/auth/';

class UserService {

    getUser() {
        return axios.get(API_URL + 'get-user', { headers: authHeader() });
    }

}

export default new UserService();
