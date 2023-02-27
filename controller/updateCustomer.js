const adminSchema = require('../model/admin');

const updateCustomer = async (req, res) => {
    try {
        const customerDetails = req.body;
        if (customerDetails.hasOwnProperty("isActive")) {
            if (req.user.role == "Admin") {
                const customerDetails = req.body;
                const customer = await adminSchema.updateOne({ email: customerDetails.email }, { isActive: customerDetails.isActive });
                if (customer) {
                    res.status(200).json(customer)
                } else {
                    res.status(400).json({ message: "unable to update customer" })
                }
            } else {
                res.status(400).json({ message: "you are not permitted to update this field" })
            }
        } else {
            const customer = await adminSchema.updateOne({ email: req.user.email }, customerDetails)
            if (customer) {
                res.status(200).json(customer)
            } else {
                res.status(400).json({ message: "unable to update customer" })
            }
        }
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = { updateCustomer }