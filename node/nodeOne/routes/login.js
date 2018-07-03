var express = require("express");
var login = express.Router();

login.get('/:id',function(req,res,next) {
  if(req.params.id == 0) next('route')
  else next()
},function (req,res,next){
  res.send("regular");
});

login.get('/:id',function (req,res,next){
  res.send('special');
})

login.post('/login', function(req,res,next) {
  res.send("Post methods, Login Success!");
});

module.exports = login;