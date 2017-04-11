var express = require('express');
var router = express.Router();

/* GET users listing. */

//http:127.0.0.1:3000 post params
router.post('/', function(req, res, next) {
  res.send({message:'ok',username:req.param("username"),password:req.param("password")});
});

//http://127.0.0.1:3000/username/password
router.get('/:username/:password',function(req,res,next){
  res.send({message:'ok',username:req.params.username,password:req.params.password,get:'get'});
});

//http://127.0.0.1:3000/users?username=rambo&password=123456
router.get('/',function(req,res,next){
  res.send({message:'ok',username:req.query.username,password:req.query.password,get:'query'});
})


module.exports = router;
