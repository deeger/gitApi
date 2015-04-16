var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

   var user = {
       name : "DJ Misurelli",
       email:"deeger_2@msn.com"
   };


  res.send(user);
});

/* accept POST request on the homepage */
router.post('/post', function (req, res, next) {
    res.send('post', {userName: req.body.name, address: req.body.address, age: req.body.age});
});

module.exports = router;
