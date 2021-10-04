import $api from "../http";

export default class TaskMasterService {
    static async saveTask(label) {
        return $api.post('/savetask', {label});
    }
}