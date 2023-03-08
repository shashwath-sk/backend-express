const productRouter = require('express').Router();
const {getProductController,addProductController,addProductToCartController} = require('../controllers/productController');
const userAuth =require('../middleware/userAuth');
const userAdmin = require('../middleware/userAdmin');

productRouter.get('/',userAuth,getProductController);
productRouter.post('/add',userAuth,userAdmin,addProductController);
productRouter.post('/cart/:id',userAuth,addProductToCartController);


module.exports = productRouter;