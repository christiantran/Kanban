var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

// fire up db connection
app.use(cors())

require('./server-assets/db/mlab-config')

// register middleware

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

// code above will never change

// routes
var users = require('./server-assets/routes/users')
var boards = require('./server-assets/routes/boards')
var comments = require('./server-assets/routes/comments')
var lists = require('./server-assets/routes/lists')
var tasks = require('./server-assets/routes/tasks')


app.use(users.router)
app.use(boards.router)
app.use(comments.router)
app.use(lists.router)
app.use(tasks.router)

// catch all
app.get('*', (req, res, next)=>{
    res.status(404).send({error: 'No matching routes'})
})

app.listen(port, ()=> {
console.log('server running on port', port)
})