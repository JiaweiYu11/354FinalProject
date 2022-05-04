const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send({
        status: 0,
        msg: 'Require Successful',
        username: req.user.username
    });
});

module.exports = router;