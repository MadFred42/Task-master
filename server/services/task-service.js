const taskModel = require("../models/task-model");

class TaskService {

    async saveTask(task) {
        const newTask = await taskModel.create({task});
        
        return newTask;
    }

    async importantTask(task) {
        const theTask = await taskModel.findOne({ task });
        theTask.important = !theTask.important;
        theTask.save();

        return theTask;
    }   

    async deleteTask(task) {
        const theTask = await taskModel.findOne({ task });
        await taskModel.deleteOne({ task });

        return theTask;
    }

    async completeTask(task) {
        const theTask = await taskModel.findOne({ task });
        theTask.important = false;
        theTask.completed = true;
        theTask.save();

        return theTask;
    }

    async changeTask(newTask, task) {
        const theTask = await taskModel.findOne({ task });
        theTask.task = newTask;
        theTask.save();

        return theTask;
    }
}

module.exports = new TaskService();