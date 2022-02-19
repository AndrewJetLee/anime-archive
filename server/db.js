const mongoose = require('mongoose');
require("dotenv").config();

const connectToDb = async () => {
    try {
        await mongoose.connect("process.env.DB_STRING");
        console.log("Successfully connected to db")
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectToDb; 
