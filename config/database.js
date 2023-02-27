const mongoose = require("mongoose");

exports.connectDataBase = (url) => {
    mongoose.set("strictQuery", true);
    mongoose.connect(url, {
        useNewUrlParser: true, useUnifiedTopology: true
    });
    console.log("Database Connected Successfully");
};