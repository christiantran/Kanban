var mongoose = require('mongoose')
var connectionString = 'mongodb://student:student@ds016298.mlab.com:16298/kanbanvue'
                           
var connection = mongoose.connection

//where connection will be live 
mongoose.connect(connectionString) 

//listen for errors and display if found
connection.on('error', err=>{
 console.log('ERROR FROM DATABASE: ', err) 
})

//once connection is made display connected
connection.once('open', ()=>{
 console.log('Connected to Database') 
})