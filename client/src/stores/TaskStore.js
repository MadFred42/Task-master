import { makeAutoObservable, toJS } from "mobx";
import TaskMasterService from "../services/taskMasterService";
import axios from 'axios';
import { API_URL } from "../http";

export default class TaskStore {
    constructor() {
        this._tasks = [] // Array with tasks 
        this._isLoading = false // loading while updating

        makeAutoObservable(this);
    }

    setTasks(task) { // push new tasks above completed tasks, becouse completed should be at the bottom
        const completed = this.tasks.filter(task => task.completed).length;
        this._tasks.splice(this.tasks.length - completed, 0, task);
    }

    setLoading(bool) { // setting loading div if the content has not yet been uploaded or has already been uploaded
        this._isLoading = bool;
    }

    updateTasks() { // deleting all tasks to upload new formation
        this._tasks.splice(0);
    }

    get isLoading() { // getting if loading or not 
        return this._isLoading;
    }

    get tasks() { //getting tasks
        return toJS(this._tasks);
    }

    async saveTask(task) { // saving tasks to the server, and getting them to render
        try {
            const response = await TaskMasterService.saveTask(task);
            console.log(response.data);
            this.setTasks(response.data)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async getUsersTasks() { // getting all user's tasks after updating the page
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

    async toggleImportantTask(task) { // seting important tab in the task model on the server
        try {
            const response = await TaskMasterService.toggleImportantTask(task);
            console.log(response.data.tasks);
            this.updateTasks();
            response.data.tasks.map(task => this.setTasks(task));
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async deleteTask(task) { // deleting task from server
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

    async completeTask(task) { // setting completed tab in the task model on the server
        try {
            const response = await TaskMasterService.completeTask(task);
            console.log(response);
            this.updateTasks();
            response.data.tasks.map(task => this.setTasks(task));
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}