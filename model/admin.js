const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["Admin", "Customer",],
            default: "Customer",
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        phone: {
            type: Number,
            // required: true,
        },
        profilePic: {
            type: String,

        }
    },
    { timestamps: true }
);

module.exports = model("admin", adminSchema);
