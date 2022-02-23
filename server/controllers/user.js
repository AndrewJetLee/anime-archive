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
            res.status(200).json(req.session);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    logout: async (req, res) => {
        try {
            req.logout();
            res.status(200).json("Logged out");
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getList: async (req, res) => {
        try {
            const user = await User.findById(req.session.passport.user);
            const { hash, salt, ...others } = user._doc; 
            res.status(200).json(others);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}