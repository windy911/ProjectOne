var express = require('express');
var router = express.Router();

router.post('/',function(req,res,next){
  res.send({error_code:0,message:'验证码已发送,请注意查收'+req.param("phoneNumber")});
})

module.exports = router;
