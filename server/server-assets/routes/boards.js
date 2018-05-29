var router = require('express').Router()
var Board = require('../models/board')
var User = require('../models/user')

//Get
//Find by Id
router.get('api/boards/:id?', (req, res) => {
    if (req.params.id) {
      Board.findById(req.params.id)
        .then(board => {
          return res.send(board)
        })
        .catch(err => {
          return res.status(404).send({ 'error': 'No board at that Id' })
        })
    }
    //If no id find all
    Board.find({})
      .then(board => {
        return res.send(board)
      })
      .catch(err => {
        return res.status(404).send({err})
      })
  })
  
  //Post
  //Create new Board
  router.post('/api/boards', (req, res) => {
    Board.create(req.body)
      .then(newBoard => {
        return res.send(newBoard)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  })
  
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
  
  //Update entire board array
  router.put('/api/boards/:id', (req, res) => {
    Board.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(board => {
        res.send(board)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  })
  
  
  //Delete
  router.delete('/api/boards/:id', (req, res, next) => {
    Board.findByIdAndRemove(req.params.id)
      .then(oldBoard => {
        res.send("Successfully Deleted")
      })
      .catch(err => {
        res.status(400).send(err)
      })
  
  })
  
  module.exports = {router}