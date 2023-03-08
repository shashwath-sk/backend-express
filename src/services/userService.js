const db =  require('../database/models/index.js');
const bcrypt = require('bcrypt');


const addUserService = async(userName,email,password,isAdmin)=>{
    const hashedPassword =  await bcrypt.hash(password,10);
    isAdmin = isAdmin!==undefined? isAdmin:false;
    const user = await db.User.create({
        userName,
        email,
        password:hashedPassword,
        isAdmin
    });
    delete user.dataValues.password;
    return user;
};

const getCartDetails = async(userId)=>{
    const foundUser = await db.User.findOne({
        where:{
            id:userId
        }
    })
    const details = [];
     await foundUser.cartDetails.reduce(async(products,productId)=>{
        const product = await db.Product.findOne({
            where:{
                id:productId
            }
        })
        return details.push(product.name);
    },details)
    
    return details;
};


module.exports = {
    addUserService,
    getCartDetails,
}