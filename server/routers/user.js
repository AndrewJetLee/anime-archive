const router = require("express").Router();
const { register, login, logout, getList, addList, deleteList } = require("../controllers/user");
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

//put requests
router.put("/list", isAuthenticated, addList);

//delete requests
router.delete("/list/:id", isAuthenticated, deleteList);

module.exports = router;
