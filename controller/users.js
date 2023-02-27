const adminSchema = require("../model/admin");


const users = async (req, res) => {
    try {
        if (req.user.role == "Admin") {
            const customer = await adminSchema.find();
            if (customer) {
                res.status(200).json(customer)
            } else {
                res.status(400).json({ message: "unable to find customer" })
            }
        } else {
            const customer = await adminSchema.findById(req.user._id)
            if (customer) {
                res.status(200).json(customer)
            } else {
                res.status(400).json({ message: "unable to fetch customer" })
            }
        }
    } catch (error) {
        res.status(500).json({ message: error })
        console.log(error)
    }
}

module.exports = { users }