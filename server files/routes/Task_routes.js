const express = require('express');
const router = express.Router();
const tasks_db = require('../models/Task_db')


router.post('/get-all-tasks', async (req,res) => {
    try{
        const queryResult = await tasks_db.get_all_tasks(req.body.date);
        res.status(200).send(queryResult);
    } catch(err) {
        console.log(err)
        res.status(500).send(err)
    }
});

router.post('/add-task', async (req,res) => {
    try{
        const {task, date} = req.body
        console.log({"task":task, "date":date});
        const queryResult = await tasks_db.insert_task(task, date);
        res.status(200).send(queryResult);
    } catch(err) {
        console.log(err)
    }
});

router.post('/delete-task', async (req,res) => {
    try{
        const {task_id} = req.body
        const queryResult = await tasks_db.delete_task(task_id);
        res.status(200).send(queryResult);
    } catch(err) {
        console.log(err)
    }
});

router.post('/update-task', async (req,res) => {
    try{
        console.log(req.body);
        const {task_id,desc} = req.body
        const queryResult = await tasks_db.update_task(task_id, desc);
        console.log("res-----------", queryResult);
        res.status(200).send(queryResult);
    } catch(err) {
        console.log(err)
    }
});

module.exports = router;