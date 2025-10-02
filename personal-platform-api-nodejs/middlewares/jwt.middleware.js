const { secret } = require('../config/jwt.config');
const jwt = require('jsonwebtoken');

const logger = (req, res, next) => {
    console.log(`Received: ${req.method} ${req.path} Body: ${req.body}`);
    next()
}

const authenticateJWT = (req, res, next) => {
    // Check if the Authorization header is provided
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        return res.status(403).send({ message: 'No token provided.' });
    }

    // Extract token from the Authorization header
    const token = authHeader.split(' ')[1]; // "Bearer <token>", we are getting the token part

    if (!token) {
        return res.status(403).send({ message: 'Invalid Authorization header format.' });
    }

    // Verify the token using jwt
    jwt.verify(token, secret, (err, decode) => {
        if (err) {
            return res.status(403).send({
                message: 'Invalid Authorization Token.'
            });
        }
        // If verification is successful, save the decoded user info to request object
        req.user = decode;
        next();
    });
};


module.exports = {
    logger: logger,
    verifyToken: authenticateJWT
}