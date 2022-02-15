const router = require("express").Router();
const { getTrending } = require("../controllers/anime");

router.get("/", getTrending);

module.exports = router; 