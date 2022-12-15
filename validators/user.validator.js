const Joi = require('joi')

const Schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    identificationMeans: Joi.string().required(),
    identificationNumber: Joi.string().required(),
    birthDate: Joi.date().required(),
    password: Joi.string().required(),
    repeatPassword: Joi.ref("password"),
    securityQuestion: Joi.string().required(),
    securityQuestionAnswer: Joi.string().required(),
}).with('password', 'repeatPassword')

module.exports = Schema