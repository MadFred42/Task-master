import axios from 'axios';
import { makeAutoObservable, toJS } from 'mobx';
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

    setAuth = (bool) => { // setting is authorized user or not
        this._isAuth = bool;
    }

    setUser = (user) => { // setting user
        this._user = user;
    }

    setLoading = (bool) => { // setting if the content has not yet been uploaded or has already been uploaded
        this._isLoading = bool;
    }

    setSignupForm = (bool) => { // when clicked on sign up button settin this to true to show sign up form
        this._isSignupForm = bool;
    }

    get isAuth() { // getting data is the user authorized or not
        return this._isAuth;
    }

    get user() { // gettin user information
        return toJS(this._user);
    }

    get isLoading() { // getting is loading or not
        return this._isLoading;
    }

    get isSignupForm() { // getting sign up form
        return this._isSignupForm;
    }
    
    async login(email, password) { // post to server to authorize user
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

    async registration(email, password, username) { // post to server to registrate user
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

    async logout() { // post to server to logout
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

    async checkAuth() { // checking is authorized user after activation token has been died
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