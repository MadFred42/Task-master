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

    async saveTask(task) {
        console.log(task);
        try {
            const response = await TaskMasterService.saveTask(task);
            console.log(response.data.tasks);
            response.data.tasks.map(item => this.setTasks(item));
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    

    // async getAllTasks() {
    //     try {
            
    //         console.log(response);
    //         response.data.map(item => this.setTasks(item.label));
    //     } catch (e) {
    //         console.log(e.response?.data?.message);
    //     }
    // }
}