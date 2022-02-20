const User = require("../models/User");
const { encryptPassword } = require("../utility/passwordHelpers");

module.exports = {
    register: async (req, res) => {
        try {
            const encrypted = encryptPassword(req.body.password);
            const newUser = await User.create({...encrypted, ...req.body});
            const { hash, salt, ...others } = newUser._doc;
            res.status(200).json(others);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    login: async (req, res) => {
        try {
            res.status(200).json("Successfully logged in").redirect("/");
        } catch (err) {
            res.status(500).json(err);
        }
        res.json("Success")
    }
}