const jwt = require('jsonwebtoken');
const { secret, expires } = require('../database/config/config');

const privateKey = secret;
const authExpiration = expires;

exports.generateToken = (info) => {
    return jwt.sign(info, privateKey, {
        expiresIn: authExpiration
    });
};

exports.validateToken = (token) => {
    try {
        return jwt.verify( token, privateKey, {
            expiresIn: authExpiration
        });
    } catch(error) {
        return false;
    }
};