const router = require("express").Router();
const { register, login } = require("../controllers/user");
const passport = require("passport");

router.post("/register", register);
router.post(
  "/login",
  passport.authenticate(
    "local",
    { failureRedirect: "/login-failure" },
  ),
  login
);

module.exports = router;
