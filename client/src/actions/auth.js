import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, history) => async dispatch => {
    try {
        const { data } = await api.signInAxios(formData);
        console.log("this is from action auth ", data);
        dispatch({ type: AUTH, payload: data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async dispatch => {
    try {
        const { data } = await api.signUpAxios(formData);

        dispatch({ type: AUTH, payload: data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}