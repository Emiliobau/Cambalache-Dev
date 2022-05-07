const usersRepository = require('../repositories/users')
const {validateToken} = require('../modules/auth')

const invalidTokenMsg = 'Unauthorized, expired or invalid token';

const isAuth = async (req, res, next) => {
    console.log(req.headers)
    const token = req.headers['authorization'];
    console.log(token)
    const verifyToken = validateToken(token);
    console.log(verifyToken)

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
    const token = req.headers['authorization']
    const verifyToken = validateToken(token)

    if (!token){
        res.status(401).json({
            status : 401,
            msg: invalidTokenMsg
            });
    }

    const userTokenId = verifyToken.id
    if (userTokenId == idUser) {
        return next()
    }
}

module.exports = {
    isAuth,
    isOwnUser
};
