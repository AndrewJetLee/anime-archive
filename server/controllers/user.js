const User = require("../models/User");

module.exports = {
    register: async (req, res) => {
        try {
            
            res.status(200).json("gigity");
        } catch (err) {
            res.status(500).json(err);
        }
    },
}