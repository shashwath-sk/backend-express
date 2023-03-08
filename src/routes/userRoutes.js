const express  =  require('express');
const {addUserController,getCartDetailsController} = require('../controllers/userController.js');
const {loginController} = require('../controllers/auth.controller');
const userAuth = require('../middleware/userAuth');
const userRouter = express.Router();

userRouter.post('/',addUserController);
userRouter.post('/login',loginController);
userRouter.get('/cart',userAuth,getCartDetailsController);

module.exports  = userRouter;