const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/index");
const adminSchema = require("../model/admin");

exports.authenticate = async (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            res.status(403).json({
                error: { message: "You are Not Authenticated, please login" },
            });
        }
        try {
            let decoded = jwt.verify(token, JWT_SECRET);
            req.user = await adminSchema.findById(decoded.id);
            next();
        } catch (error) {
            res.status(500).json({ error: { message: error.message } });
        }
    }
};