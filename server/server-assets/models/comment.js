var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'Comment'

var commentSchema = new Schema({
    body: { type: 'string', required: true, },
    user: {type: 'string', required: true},

    userId: {
        type: ObjectId,
        ref: 'User',
    },

    boardId:{
        type: ObjectId,
        ref: 'Board'
    },

    listId:{
        type: ObjectId,
        ref: 'List'
    },
    
    taskId: {
        type: ObjectId,
        ref: 'Task',
    }
})

module.exports = mongoose.model(schemaName, commentSchema)