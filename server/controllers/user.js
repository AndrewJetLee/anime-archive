const User = require("../models/User");
const { encryptPassword } = require("../utility/passwordHelpers");

module.exports = {
    register: async (req, res) => {
        let userInfo = req.body; 
        try {
            const encrypted = encryptPassword(req.body.password);
            const newUser = await User.create({...encrypted, ...userInfo});
            const { hash, salt, ...others } = newUser._doc;
            res.status(200).json(others);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}