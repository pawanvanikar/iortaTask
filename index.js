const express = require("express");
const { PORT, DATABASE_URL } = require("./config");
const { connectDataBase } = require("./config/dataBase");

const adminRoutes = require("./routes/admin");

let app = express();

const startServer = () => {
    try {
        connectDataBase(DATABASE_URL);

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.use("/api/admin", adminRoutes);

        app.listen(PORT, (err) => {
            if (err) throw err;
            console.log(`server is running on ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
};
startServer();