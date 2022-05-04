const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const expJWT = require('express-jwt');
const config = require('./config');

//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false}));
//application/json
app.use(express.json());

app.use(expJWT({ secret: config.jwtKey, algorithms: ['HS256']}).unless({
    path: ['/api/login', '/api/register'
          ]
}));

app.use('/api/register',require('./routes/register')); 
app.use('/api/login',require('./routes/login'));  
app.use('/api/dashboard', require('./routes/dashboard'));
//app.use('/api/peak',require('./routes/peak'));  
//app.use('/api/scheduled',require('./routes/scheduled'));
//app.use('/api/toolssupplies',require('./routes/toolssupplies'));
//app.use('/api/miscequipments',require('./routes/miscequipments'));
//app.use('/api/farmuse',require('./routes/farmuse'));
//app.use('/api/specifically',require('./routes/specifically'));
///app.use('/api/lienholder',require('./routes/lienholder'));
//app.use('/api/grain',require('./routes/grain'));


app.use((err, req, res, next) =>{
    if(err instanceof Joi.ValidationError){
        return res.send({
            status: 1,
            msg: [err.details[0].context.label, err.details[0].message]
        })
    }
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 1,
            msg: 'TOKEN ERROR'
        });
    }
    res.send({
        status: 1,
        msg: err.message || err
    });
})

app.listen(6666, () => console.log('Server running on http://localhost:6666'));