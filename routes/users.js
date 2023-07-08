let express = require("express");
let router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", function (req, res, next) {
  res.json({ data: "success" });
});

module.exports = router;
