var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schemaName = "Board"

var boardSchema = new Schema ({
    title: {type: String, required: true},
    user: {type: String, required: true},

    parentId: {
        type: ObjectId,
        ref: 'User',
    }
})

module.exports = mongoose.model(schemaName, boardSchema)