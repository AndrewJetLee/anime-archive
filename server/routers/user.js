const router = require("express").Router();
const { register, login, logout, getList,addList } = require("../controllers/user");
const passport = require("passport");
const { isAuthenticated } = require("../utility/authMiddleware");

//get requests
router.get("/list", isAuthenticated, getList);
router.get("/logout", logout)

//post requests
router.post("/register", register);
router.post(
  "/login",
  passport.authenticate("local"),
  login
);
router.post("/list", isAuthenticated, addList);

module.exports = router;
