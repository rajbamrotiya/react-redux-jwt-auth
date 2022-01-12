import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://laravel-jwt-api.test/api/products/';

class ProductService {

    all() {
        return axios.get(API_URL, {headers: authHeader()});
    }

    get(id) {
        return axios.get(API_URL + id, {headers: authHeader()});
    }

    delete(id) {
        return axios.delete(API_URL + id, {headers: authHeader()});
    }

}

export default new ProductService();
