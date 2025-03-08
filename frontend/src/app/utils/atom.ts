import { atom } from 'jotai';
import Cookies from 'js-cookie';
export const SERVER_ADDR = "http://localhost:8080"
export const isLoggedInAtom = atom(false);
export const userIdAtom = atom("");
export const usernameAtom = atom("");


export const logoutUser = () => {
    Cookies.remove("token");
    Cookies.remove("userId");
    Cookies.remove("username");
};