const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');


module.exports = (req, res) => {
    //test if user exist
    const sql = 'SELECT * from user WHERE username=?';
    db(sql, req.body.username, result => {
        if(result.length !== 1){
            return res.send({
                status: 1,
                msg: 'User name does not exist'
            });
        }
        //Match the password if user exist
        const psRes = bcrypt.compareSync(req.body.password, result[0].password);
        if (!psRes){
            return res.send({
               status: 1,
               msg: 'Password Incorrect!' 
            });
        }
        //generate token according to user's information
        const token = jwt.sign({ username: req.body.username }, config.jwtKey, {
            expiresIn: '1h'
        });

        res.send({
            status: 0,
            msg: 'Login Successful!',
            token
        });
    });

};