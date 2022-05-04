const bcrypt = require('bcryptjs');
const { Result } = require('antd');
const db = require('../db');

module.exports = (req, res) => {
    //res.send(req.body)
    //search that if user exist
    const sql = 'SELECT * FROM user WHERE username=?';
    db(sql, req.body.username, result => {
        if (result.length >= 1) {
            return res.send({
                status: 1,
                msg: 'The user name has already existed'
            });
        }

        const sql = 'INSERT INTO user set ?';
        //Encryption
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const { username, email, password } = req.body;
        db(sql, { username, email, password }, result => {
            //res.send(result);
            if (result.affectedRows === 1) {
                return res.send({
                    status: 0,
                    msg: 'Register Successful'
                });
            }
            res.send({
                status: 1,
                msg: 'Register Failed'
            });


        });

    });
};