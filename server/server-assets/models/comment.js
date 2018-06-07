var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schemaName = 'Comment'

var commentSchema = new Schema({
    body: { type: 'string', required: true, },
    user: { type: 'string' },

    userId: {
        type: ObjectId,
        ref: 'User',
        // required: true
    },

    boardId: {
        type: ObjectId,
        ref: 'Board',
    },

    listId: {
        type: ObjectId,
        ref: 'List'
    },

    taskId: {
        type: ObjectId,
        ref: 'Task',
        required: true
    }
})

module.exports = mongoose.model(schemaName, commentSchema)