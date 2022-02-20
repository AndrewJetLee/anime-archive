const router = require("express").Router();
const { register } = require("../controllers/user");
const passport = require("passport");

router.post("/register", register);
router.post(
  "/login",
  passport.authenticate(
    "local",
    { failureRedirect: "/login-failure" },
  ),
  (req, res) => {
    res.json("Success")
  }
);

module.exports = router;
