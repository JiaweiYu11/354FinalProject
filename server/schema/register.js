const Joi = require('@hapi/joi');


const registerSchema = {
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmpassword: Joi.ref('password')
};

module.exports = {
    registerSchema
};