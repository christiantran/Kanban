var router = require('express').Router()
var Boards = require('../models/board')
var User = require('../models/user')
var session = require('../auth/session')

//Post
//Create new Board
router.post('/api/boards', (req, res, next) => {
  var board = req.body
  board.creator = req.session.uid
  Boards.create(board)
    .then(newBoard => {
      res.status(200).send(newBoard)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//finds all boards by creator id
router.get('/api/boards', (req, res, next) => {
  Boards.find({creator: req.session.uid})
    .then(boards => {
      res.status(200).send(boards)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//Update entire board array
router.put('/api/boards/:id', (req, res) => {
  Boards.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(board => {
      res.send(board)
    })
    .catch(err => {
      return res.status(400).send(err)
    })
})

//Delete
router.delete('/api/boards/:id', (req, res, next) => {
  Boards.findByIdAndRemove(req.params.id)
    .then(oldBoard => {
      res.send("Successfully Deleted")
    })
    .catch(err => {
      res.status(400).send(err)
    })

})
  
module.exports = {router}


  //Put
  //Add a board
  // router.put('/api/boards/:id/boards', (req, res) => {
  //   Board.findById(req.params.id)
  //     .then(function(board){
  //       board.songs.addToSet(req.body)
  //       board.save()
  //       res.send(board)
  //     })
  //     .catch(err => {
  //       return res.status(400).send(err)
  //     })
  // })
  
  