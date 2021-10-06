import $api from "../http";

export default class TaskMasterService {
    static async saveTask(task) {
        return $api.post('/savetask', { task });
    }
}