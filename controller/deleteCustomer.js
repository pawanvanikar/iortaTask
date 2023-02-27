const adminSchema = require('../model/admin');

const deleteCustomer = async (req, res) => {
    try {
        const { email } = req.body;
        if (req.user.role == "Admin") {
            const customer = await adminSchema.deleteOne({ email });
            if (customer) {
                res.status(200).json({ message: "customer deleted successfully", email })
            } else {
                res.status(400).json({ message: "cannot deleted successfully", email })
            }
        } else {
            const customer = await adminSchema.deleteOne({ email: req.user.email });
            if (customer) {
                res.status(200).json({ message: "customer deleted successfully", email: req.user.email })
            } else {
                res.status(400).json({ message: "cannot deleted successfully", email })
            }
        }

    } catch (error) {
        res.status(500).json({ message: error })
        console.log(error)
    }

}

module.exports = { deleteCustomer }