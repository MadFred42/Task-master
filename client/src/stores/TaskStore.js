import { makeAutoObservable, toJS } from "mobx";
import TaskMasterService from "../services/taskMasterService";
import axios from 'axios';
import { API_URL } from "../http";

export default class TaskStore {
    constructor() {
        this._isComplete = false // to check is completed task or not
        this._tasks = [] // Array with tasks 
        this._isLoading = false // loading while updating
        makeAutoObservable(this);
    }

    setComplete(bool) {
        this._isComplete = bool;
    }

    setTasks(task) {
        this._tasks.push(task);
    }

    setLoading(bool) {
        this._isLoading = bool;
    }

    updateTasks() {
        this._tasks.splice(0);
    }
 
    get isImportant() {
        return this._isImportant;
    }

    get isComplete() {
        return this._isComplete
    }

    get isLoading() {
        return this._isLoading;
    }

    get tasks() {
        return toJS(this._tasks);
    }

    async saveTask(task) {
        console.log(task);
        try {
            const response = await TaskMasterService.saveTask(task);
            console.log(response.data);
            this.setTasks(response.data)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async getUsersTasks() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/userstasks`, { withCredentials: true });
            console.log(response);
            this.updateTasks();
            response.data.tasks.map(task => this.setTasks(task));
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    async toggleImportantTask(task) {
        try {
            const response = await TaskMasterService.toggleImportantTask(task);
            console.log(response.data.tasks);
            this.updateTasks();
            response.data.tasks.map(task => this.setTasks(task));
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async deleteTask(task) {
        console.log(task);
        try {
            const response = await TaskMasterService.deleteTask(task);
            console.log(response);
            this.updateTasks();
            response.data.tasks.map(task => this.setTasks(task));
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}