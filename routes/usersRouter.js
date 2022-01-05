var express = require('express');
var router = express.Router();
const { StatusCodes } = require("http-status-codes");
const auth = require("../middleware/auth/authMiddleware");


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/welcome', auth, function(req, res, next) {
    console.log(`Entering ${req.originalUrl}`);
    res.status(StatusCodes.OK).send(` Welcome 🙌 - Successful execution of ${req.originalUrl}`);
    console.log(`Successful execution of ${req.originalUrl}`);
    console.log(`Finalizing ${req.originalUrl}`);
    return;
});

module.exports = router;