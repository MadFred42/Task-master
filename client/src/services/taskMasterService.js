import $api from "../http";

export default class TaskMasterService {
    static async saveTask(task) { 
        return $api.post('/savetask', { task });
    }

    static async toggleImportantTask(task) {
        console.log(task);
        return $api.post('/important', { task });
    }

    static async deleteTask(task) {
        console.log(task);
        return $api.post('/deleteTask', { task });
    }

    static async completeTask(task) {
        return $api.post('/completeTask', { task });
    }
}