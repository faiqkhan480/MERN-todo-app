const express = require('express');

const router = express.Router();

const Task = require('../model/schema')


router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    }
    catch(error) {
        console.error(error)
    }
});


router.get("/:id", async (req, res) => {
    try {
        const tasks = await Task.findOne({ _id: req.params.id })
        res.json(tasks)
    }
    catch(error) {
        console.error(error)
    }
});

router.post('/', async (req, res) => {
    console.log(req.body, 'req-=-=-=-')
    const task = new Task({
        task: req.body.task
    })

    try {
        await task.save()
        res.json(task)
        console.log(task, 'task')
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            {new: true, runValidator: true}
        );
        res.json(task)
    }
    catch(error) {
        console.error(error)
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndRemove(
            { _id: req.params.id });
        res.json(task)
    }
    catch(error) {
        console.error(error)
    }
});

module.exports = router;