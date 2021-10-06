const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    task: {type: String, required: true},
    important: {type: Boolean, default: false},
    completed: {type: Boolean, default: false}
});

module.exports = model('Task', TaskSchema);