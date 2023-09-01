let express = require("express");
let router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/api", function (req, res, next) {
  
  let { username } = ctx.state.session
  
  let newRequest = {
    responseHeaders: {
      "App-Token":  getAppToken(username)
    }
  }
  


  ctx.state = {

  
    
  }

  
  res.send("isApiRequest");
});




module.exports = router;
