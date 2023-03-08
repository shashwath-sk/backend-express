const {loginService}  = require('../services/auth.service');

const loginController = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const {token} = await loginService(email,password)
        res.status(200).json(token);
    }
    catch(error){
        console.log("error");
        res.status(500).json(error);
    }
}


module.exports = {
    loginController,
}