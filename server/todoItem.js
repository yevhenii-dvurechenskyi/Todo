const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
    checkbox: Boolean,
    creationTime: String,
    deadline: {
        date: String,
        time: String
    },
    header: String,
    id: String,
    priority: String,
    task: String
});

const TodoItem = mongoose.model('TodoItem', todoItemSchema);

module.exports = TodoItem;