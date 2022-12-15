const jwt = require('jsonwebtoken');

// load db 
const db = require("../models");
// load user model
const User = db.user;
const Op = db.Sequelize.Op;


const dotenv = require('dotenv');
dotenv.config();

function AuthenticateUser(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).json({message: 'Please Login First', data: {}});
    const token = authHeader.split(' ')[1];
    
    const {JWTKey} = process.env;

    try {
        const decoded = jwt.verify(token.toString(), JWTKey);
        User.findByPk(decoded.id)
            .then(data => {
                if (data) {
                    req.user = decoded;
                    next()
                } else {
                    return res.status(404).json({
                        message: 'Cannot find User',
                        data: {}
                    });
                }
            })
            .catch(err => {
                return res.status(500).send({
                    message: 'Error retrieving User',
                    data: {}
                });
            }); 
    } catch(err){
        return res.status(401).json({
            message: 'Please Login First',
            data: {}
        });
    }
}

module.exports = {AuthenticateUser};