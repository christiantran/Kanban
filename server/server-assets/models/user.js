var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'User'

var userSchema = new Schema ({
    name: {
        type: 'string',
        required: true,
        unique: true
    }
})


module.exports = mongoose.model(schemaName, userSchema)