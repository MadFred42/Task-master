const taskModel = require("../models/task-model");

class TaskService {
    async saveTask(task) {
        const newTask = await taskModel.create({task});
        
        return newTask;
    }

    async importantTask(task) {
        const veryTask = await taskModel.findOne({ task });
        veryTask.important = !task.important;
        veryTask.save();
    }
}

module.exports = new TaskService();