const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    console.log("Entering token verification");
    const token = req.headers["x-access-token"];
    console.log("TOKEN: " + token);
    if (!token) {
        console.log("A token is required for authentication");
        return res.status(403).send("A token is required for authentication");
    }
    try {
        console.log(`Starting token verification ${req.originalUrl}`);
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        console.log(decoded);
        console.log("Successful token validation");
    } catch (err) {
        console.log("Invalid Token");
        return res.status(401).send("Invalid Token");
    }
    console.log("Finalizing token verification");
    return next();
};

module.exports = verifyToken;