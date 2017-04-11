var express = require('express');
var router = express.Router();
var redis = require('redis');
// var client = require('redis').createClient();

router.post('/',function(req,res,next){

  // client.on('error', function (err) {
  //   console.log('Error ' + err);
  // });
  // 
  // client.set(req.param('username'),req.param('password'));
  // client.quit();

  res.send({error_code:0,message:'注册成功',username:req.param('username')});
})

module.exports = router;
