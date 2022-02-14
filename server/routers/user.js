const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send("Gigity goo");
});

module.exports = router; 