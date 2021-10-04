import { makeAutoObservable } from "mobx";
import TaskMasterService from "../services/taskMasterService";
import axios from 'axios';
import { API_URL } from "../http";

export default class TaskStore {
    constructor() {
        this._isImportant = false // to check is improtant task or not
        this._isComplete = false // to check is completed task or not
        this._tasks = [] // Array with tasks 

        makeAutoObservable(this);
    }

    setImportant() {
        this._isImportant = !this._isImportant;
    }

    setComplete(bool) {
        this._isComplete = bool;
    }

    setTasks(task) {
        this._tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
 
    get isImportant() {
        return this._isImportant;
    }

    get isComplete() {
        return this._isComplete
    }

    get tasks() {
        return this._tasks;
    }

    async saveTask(label) {
        console.log(label);
        try {
            const response = await TaskMasterService.saveTask(label);
            console.log(response);
            this.setTasks(response.data);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    

    async getAllTasks() {
        try {
            const response = await axios.get(`${API_URL}/gettasks`, { withCredentials: true });
            console.log(response);
            response.data.map(item => this.setTasks(item.label));
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}