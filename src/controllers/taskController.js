const taskService = require('../services/taskService');

const getTaskList =  async (req,res)=>{
    const tasks =  await taskService.getTaskList(req.query.isComplete);
    if(!tasks){
        res.status(404).json({message: 'No tasks found'});
    }
    res.status(200).json(tasks);
};

const getTaskByID =  async (req,res)=>{

    const task =  await taskService.getTaskByID(req.params.id);
    if(!task){
        res.status(404).json({message: 'No tasks found'});
    }
    res.status(200).json(task);
};

const createTask =  async(req,res)=>{

    if(req.body.Title === undefined){
        res.status(400).json({message: 'Title is required'});
    }
    const tasks =  await taskService.createTask(req.body);
    res.status(201).json(tasks);

};

const updateTask =  async (req,res)=>{
    if(!isNaN(req.body.id)){
        res.status(400).json({message: 'Id should be Integer'});
    }
    const task =  await taskService.updateTask(req.params.id);
    res.status(200).json(task);
};


const deleteTask =  async (req,res)=>{
    const tasks = await taskService.deleteTask(req.query.isComplete);
    res.status(200).json(tasks);
};


module.exports = { getTaskList, getTaskByID, createTask, updateTask, deleteTask };