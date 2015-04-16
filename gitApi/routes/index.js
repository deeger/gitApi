var express = require('express');
var router = express.Router();
var request = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "DJ's" });
});

/* puts github data into commitData page*/
router.get('/commitData', function(req, res) {
    request.get("https://api.github.com/repos/UVU-DigitalMedia/DGM-Competency-Browser/commits?author=deeger@dmisurelli-mbp.local")
    .end(function(err, response){
        var commits = JSON.parse(response.text);
        res.render('commitData', {commits:commits});
    })
});

module.exports = router;
