const usersRepository = require('../repositories/users')
const {validateToken} = require('../modules/auth')

const invalidTokenMsg = 'Unauthorized, expired or invalid token';

const isAuth = async (req, res, next) => {  
    let token = req.headers['authorization'];

    if(token){
        if(token.startsWith("Bearer ")){
            token =token.split(" ")[1]
        }
    }
    
    const verifyToken = validateToken(token);

    if (!verifyToken){
        res.status(401).json({
            status : 401,
            msg: invalidTokenMsg
            });
    }
    else {
        const user = await usersRepository.getById(verifyToken.id)
        if (!user) {
            res.status(401).json({
                status : 401,
                msg: invalidTokenMsg
                });
    }        
        else next();
    }
};


const isOwnUser = async (req, res, next) => {
    const idUser = req.params.id
    let  token = req.headers['authorization']
    if (!token){
        res.status(401).json({
            status : 401,
            msg: invalidTokenMsg
            });
    }
    if(token){
        if(token.startsWith("Bearer ")){
            token =token.split(" ")[1]
        }
    }
    const verifyToken = validateToken(token)
    const userTokenId = verifyToken.id
    if (userTokenId != idUser) {
        res.status(401).json({
            status : 401,
            msg: invalidTokenMsg
            });
    }
    else {
        return next()
    }
}

module.exports = {
    isAuth,
    isOwnUser
};
