var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

// fire up db connection
app.use(cors())

require('./server-assets/db/mlab-config')

// register middleware
let auth = require('./server-assets/auth/routes')
app.use(auth.session)
app.use(auth.router)
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

// code above will never change

//Gate Keeper Must login to access any route below this code
app.use((req,res,next)=>{
    if (!req.session.uid) {
      return res.status(401).send({
        error: 'please login to continue'
      })
    }
    next()
  })

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