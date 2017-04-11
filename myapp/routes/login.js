var express = require('express');
var router = express.Router();



router.post('/',function(req,res,next){


  // var redis = require('redis');
  // var client = require('redis').createClient();
  //
  // client.on('error', function (err) {
  //   console.log('Error ' + err);
  // });
  //
  // client.get(req.param("username"), function(err, reply) {
  //   // reply is null when the key is missing
  //   console.log('username =  ' + req.param("username") + " password = " + req.param("password") + " reply = " + reply);
  //
  //   if(reply == req.param("password")){
  //     res.send({error_code:0,message:'登录成功'});
  //   }else{
  //     res.send({error_code:-1,message:'登录失败，密码错误'});
  //   }
  // });
  //
  // client.quit();

  res.send({error_code:0,message:'登录成功'});
  
})

module.exports = router;
