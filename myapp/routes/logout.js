var express = require('express');
var router = express.Router();

router.post('/',function(req,res,next){
  res.send({error_code:0,message:'已登出'+req.param("token")});
})

module.exports = router;
