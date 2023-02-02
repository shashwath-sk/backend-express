const db = require('../database/models');

const getTaskList = async (isComplete)=>{
    if(isComplete===undefined){
        const tasks = await db.Task.findAll();
        return tasks;
    }
    isComplete = isComplete === 'true';
    const getIsCompletetasks = await db.Task.findAll({
        where:{
            isComplete:isComplete
        }
    });
    return getIsCompletetasks;
    
};

const getTaskByID = (taskId)=>{
    taskId = Number(taskId);
    const task = db.Task.findOne({
        where:{
            id:taskId
        }
    });
    return task;
};

const createTask = async (task)=>{

    const tasks= await db.Task.create({name:task.name,isComplete:false});
    return tasks;
};

const updateTask =  async (taskId)=>{
    taskId = Number(taskId);
    const task = await db.Task.findOne({
        where:{
            id:taskId
        }
    });
    task['isComplete']=!task['isComplete'];
    await task.save();
    return task;
};


const deleteTask =  async (isComplete)=>{
   
    isComplete = isComplete === 'true';
    await db.Task.destroy({
        where:{
            isComplete:isComplete
        }
    });
    return getTaskList();
};


module.exports = { getTaskList, getTaskByID, createTask, updateTask, deleteTask };
