const adminSchema = require("../model/admin");
// const { compare } = require("bcryptjs");
const { JWT_EXPIRE, JWT_SECRET } = require("../config/index");
const { sign } = require("jsonwebtoken");

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Email and Password are mandatory" });
    } else {
        const user = await adminSchema.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "user doesn't exist" });
        } else if (password !== user.password) {
            res.status(400).json({ message: "password does not match" });
        } else if (user.isActive == false) {
            res.status(404).json({ message: "user is inactive" });
        } else {
            const token = sign({ id: user._id }, JWT_SECRET, {
                expiresIn: JWT_EXPIRE,
            });
            const options = {
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            res
                .status(200)
                .cookie('cookie', "", options, token)
                .json({ message: "user logged in successfully", users: user, token });
        }

    }
};

module.exports = { loginUser };