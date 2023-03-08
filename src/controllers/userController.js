const {addUserService,getCartDetails} = require('../services/userService.js');


const addUserController = async(req,res)=>{
    try{
        const {userName,email,password,isAdmin} = req.body;
        const user = await addUserService(userName,email,password,isAdmin);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json(error);
    }
};

const getCartDetailsController = async(req, res)=>{
    try{
        const userId = req.userId;
        const cartDetails = await getCartDetails(userId);
        res.status(200).json(cartDetails);
    }
    catch(error){
        res.status(500).json(error);
    }
}


module.exports = {
    addUserController,
    getCartDetailsController,
}