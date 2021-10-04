const taskModel = require("../models/task-model");

class TaskService {
    async saveTask(label, userId) {
        const task = await taskModel.create({label, user: userId});
        
        return task;
    }
}

module.exports = new TaskService();