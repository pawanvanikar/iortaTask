const adminSchema = require('../model/admin')
const registerUser = async (req, res) => {
    try {

        const userData = req.body;
        const user = await adminSchema.create(userData)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(400).json({ message: 'Unable to register user!' })
        }

    } catch (error) {
        res.status(500).json({ message: error })
        console.log(error)
    }

}

module.exports = { registerUser }