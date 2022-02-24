const User = require("../models/User");
const { encryptPassword } = require("../utility/passwordHelpers");

module.exports = {
  register: async (req, res) => {
    try {
      const encrypted = encryptPassword(req.body.password);
      const newUser = await User.create({ ...encrypted, ...req.body });
      const { hash, salt, ...others } = newUser._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  login: async (req, res) => {
    try {
      let username = req.user._doc.username;
      let payload = { username, ...req.session };
      res.status(200).json(payload);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  logout: async (req, res) => {
    try {
      req.logOut();
      res.status(200).json("Logged out");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getList: async (req, res) => {
    try {
      const user = await User.findById(req.session.passport.user);
      const { hash, salt, birthday, email,...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  addList: async (req, res) => {
    try {
      const userQuery = await User.findById(req.session.passport.user);
      if (userQuery._doc.list.some((item) => item.id === req.body.id)) {
        res.status(200).send("Anime or manga already exists in your list");
      } else {
        await User.findOneAndUpdate(
          { _id: req.session.passport.user },
          {
            $push: { list: req.body },
          }
        );
        const updatedUser = await User.findById(req.session.passport.user);
        const { hash, salt, birthday, email, ...others } = updatedUser._doc;
        res.status(200).json(others);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteList: async (req, res) => {
    try {
        res.status(200).json("Noice");
    } catch (err) {
        res.status(500).json(err);
    }
  }
};
