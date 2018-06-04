var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schemaName = "List"

var listSchema = new Schema ({
    title: {type: String, required: true},
    user: {type: String},

    userId:{
        type: ObjectId,
        ref: 'User',
        required: true
    },

    boardId: {
        type:ObjectId,
        ref: 'Board',
        required: true
    }
})


module.exports = mongoose.model(schemaName, listSchema)