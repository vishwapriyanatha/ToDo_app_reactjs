import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";

export const login = (username, password) => (dispatch) => {
    if (AuthService.login(username, password)) {

        dispatch({
            type: SET_MESSAGE,
            payload: 'Success',
        });

        return Promise.resolve();
    } else {
        const message = 'Invalid Username or Password';

        dispatch({
            type: SET_MESSAGE,
            payload: message,
        });
        return Promise.reject();
    }
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};