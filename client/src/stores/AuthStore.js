import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { API_URL } from '../http';
import AuthService from '../services/AuthService';

export default class AuthStore {
    
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._isLoading = false;
        this._isSignupForm = false;
        makeAutoObservable(this);
    }

    setAuth = (bool) => {
        this._isAuth = bool;
    }

    setUser = (user) => {
        this._user = user;
    }

    setLoading = (bool) => {
        this._isLoading = bool;
    }

    setSignupForm = (bool) => {
        this._isSignupForm = bool;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get isLoading() {
        return this._isLoading;
    }

    get isSignupForm() {
        return this._isSignupForm;
    }
    
    async login(email, password) {
        console.log(email);
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(email, password, username) {
        try {
            const response = await AuthService.registration(email, password, username);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            this.setSignupForm(false);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}