var express = require('express')
var bp = require('body-parser')
var app = express()
let server = require('http').createServer(app)
var cors = require('cors')
var port = process.env.PORT || 3000



var whitelist = ['http://localhost:8080', 'https://cekanban.herokuapp.com'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true
};
// fire up db connection
app.use(cors(corsOptions))

require('./server-assets/db/mlab-config')

app.use(express.static(__dirname + "/../www/dist"))

// register middleware
let auth = require('./server-assets/auth/routes')
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))
app.use(auth.session)
app.use(auth.router)

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