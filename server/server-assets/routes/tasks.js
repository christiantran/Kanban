var router = require('express').Router()
var Tasks = require('../models/task')
var User = require('../models/user')

// Get all
router.get('/api/tasks', (req, res, next)=>{
    Tasks.find(req.query)
    .then(task=>{
        res.status(200).send(task)
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

router.get('/api/tasks/:id', (req, res, next)=>{
    Tasks.findById(req.params.id)
    .then(task=>{
        res.status(200).send(task)
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

router.post('/api/task', (req, res, next)=>{
    var task = req.body
    Tasks.create(task)
    .then(newTask=>{
        res.status(200).send(newTask)
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

// router.put('/api/tasks/:id/task', (req, res) => {
//     Tasks.findById(req.params.id)
//     .then(function(task){
//         list.songs.addToSet(req.body)
//         list.save()
//     })
//     .catch(err=>{
//         res.status(400).send(err)
//     })
//  })


// edit
router.put('/api/tasks/:id', (req, res, next)=>{
    Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(task=>{
        res.status(200).send({message: "Successfully Updated!", task})
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

// delete
router.delete('/api/tasks/:id', (req, res, next)=>{
    Tasks.findByIdAndRemove(req.params.id)
    .then(data=>{
        res.send({message: "Successfully Delted!"})
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

module.exports = {
    router
}