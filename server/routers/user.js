const router = require("express").Router();
const { register, login, getList } = require("../controllers/user");
const passport = require("passport");
const { isAuthenticated } = require("../utility/authMiddleware");

router.post("/register", register);
router.post(
  "/login",
  passport.authenticate("local"),
  login
);
router.get("/list", isAuthenticated, getList);

module.exports = router;
