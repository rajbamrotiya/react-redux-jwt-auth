import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";

export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
        (response) => {
            console.log(response);
            if (response.success) {
                dispatch({
                    type: REGISTER_SUCCESS,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: response.message,
                });

                return Promise.resolve();
            }else {
                const message = response.error.toString();

                dispatch({
                    type: REGISTER_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                });

                return Promise.reject();
            }
        }
    );
};

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
        (data) => {

            if (data.success) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { user: data.user },
                });

                return Promise.resolve();
            }else {
                const message = data.error.toString();
                dispatch({
                    type: LOGIN_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                });

                return Promise.reject();
            }
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};
