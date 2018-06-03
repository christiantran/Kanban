var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schemaName = "Task"

var taskSchema = new Schema ({
    body: {type: String, required: true},
    user: {type: String},

    userId:{
        type: ObjectId,
        ref: 'User',
        required: true
    },

    boardId: {
        type:ObjectId,
        ref: 'Board',
    },

    listId: {
        type:ObjectId,
        ref: 'List',
    },


})


module.exports = mongoose.model(schemaName, taskSchema)