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
        console.log(theTask);
        await taskModel.deleteOne({ task });

        return theTask;
    }
}

module.exports = new TaskService();