const {NotFoundError} =  require('../../error');
const {getRedisClient} = require('../utils/redisUtils');

const userAuth = async(req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    if(!token)
    {
        throw new NotFoundError('unauthorized access is restricted');
    }
    const redisClient = await getRedisClient();
    const userId = await redisClient.get(token);
    if(!userId){
       throw new NotFoundError('unauthorized access is restricted');
    }
    req.userId = userId;
    next();
}


module.exports = userAuth;