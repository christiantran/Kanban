var router = require('express').Router()
var Comments = require('../models/comment')
var User = require('../models/user')

// Get all
router.get('/api/comments', (req, res, next)=>{
    Comments.find(req.query)
    .then(comments=>{
        res.status(200).send(comments)
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

// Get by Task Id
router.get('/api/tasks/:taskId/comments', (req, res, next)=>{
    Comments.find({taskId: req.params.taskId})
    .then(comments=>{
        res.status(200).send(comments)
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

router.post('/api/comments', (req, res, next)=>{
    var comment = req.body
    comment.creator = req.session.uid
    Comments.create(comment)
    .then(newComment=>{
        res.status(200).send(newComment)
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

// edit
router.put('/api/comments/:id', (req, res, next)=>{
    Comments.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(comment=>{
        res.status(200).send({message: "Successfully Updated!", comment})
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

// delete
router.delete('/api/comments/:id', (req, res, next)=>{
    Comments.findByIdAndRemove(req.params.id)
    .then(data=>{
        res.send({message: "Successfully Deleted!"})
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

module.exports = {
    router
}