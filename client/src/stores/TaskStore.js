import { makeAutoObservable, toJS } from "mobx";
import TaskMasterService from "../services/taskMasterService";
import axios from 'axios';
import { API_URL } from "../http";

export default class TaskStore {
    constructor() {
        this._tasks = [] // Array with tasks 
        this._isLoading = false // loading while updating
        this._editTaskLabel = false; // div for changing tasks' label

        makeAutoObservable(this);
    }

    setTasks(task) { // push new tasks above completed tasks, becouse completed should be at the bottom
        const completed = this.tasks.filter(task => task.completed);
        this._tasks.splice(this.tasks.length - completed.length, 0, task);
    }
    
    setTasksWithPush(task) {
        this._tasks.push(task);
    }

    updateOneTask(task) {
        this._tasks.splice(this.tasks.findIndex(item => item.task === task.task), 1, task);
    }

    updateChangedTask(task) {
        this._tasks.splice(this.tasks.findIndex(item => item._id === task._id), 1, task);
    }

    setLoading(bool) { // setting loading div if the content has not yet been uploaded or has already been uploaded
        this._isLoading = bool;
    }

    updateTasks() { // deleting all tasks to upload new formation
        this._tasks.splice(0);
    }

    get editTaskLabel() {
        return this._editTaskLabel;
    }

    get isLoading() { // getting if loading or not 
        return this._isLoading;
    }

    get tasks() { //getting tasks
        return toJS(this._tasks);
    }    

    checkTask(task) {
        const checkedTask = this.tasks.find(item => item.task === task);
        
        if (!checkedTask.checked) {
            checkedTask.checked = true;
            this.updateOneTask(checkedTask);
        } else {
            delete checkedTask.checked;
            this.updateOneTask(checkedTask);
        }
    }

    toEditTaskLabel(task) {
        const editedTask = this.tasks.find(item => item.task === task);

        if (!editedTask.edit) {
            editedTask.edit = true;
            this.updateOneTask(editedTask);
        } else {
            delete editedTask.edit;
            this.updateOneTask(editedTask);
        }
    }

    checkAll(checked) {
        const toggleCheckedTasks = this.tasks.map(item => {
            if (checked) {
                item.checked = true;
            } else {
                item.checked = false;
            }

            return item;
        });
        this.updateTasks();
        toggleCheckedTasks.map(task => this.setTasksWithPush(task));
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
    
    async changeTask(newTask, task) {
        try {
            const response = await TaskMasterService.changeTask(newTask, task);
            console.log(response.data);
            this.updateChangedTask(response.data);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async deleteCheckedTasks() {
        const deleteTasks = this.tasks.filter(item => item.checked);

        for (let tasks in deleteTasks) {
            await TaskMasterService.deleteTask(deleteTasks[tasks].task);
        }

        this.updateTasks();
    }
}