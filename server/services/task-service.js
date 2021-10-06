const taskModel = require("../models/task-model");

class TaskService {
    async saveTask(task) {
        const newTask = await taskModel.create({task});
        
        return newTask;
    }
}

module.exports = new TaskService();