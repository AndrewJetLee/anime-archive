const router = require("express").Router();
const { register } = require("../controllers/user");

router.get("/", register);

module.exports = router; 