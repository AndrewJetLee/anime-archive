const router = require("express").Router();
const { getTrending } = require("../controllers/manga");

router.get("/", getTrending);

module.exports = router; 