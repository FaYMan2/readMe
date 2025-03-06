import { atom } from 'jotai';

export const SERVER_ADDR = "http://localhost:8080"
export const isLoggedInAtom = atom(false);
export const userIdAtom = atom("");
export const usernameAtom = atom("");
