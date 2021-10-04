const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    label: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = model('Task', TaskSchema);