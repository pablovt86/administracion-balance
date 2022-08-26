var express = require('express');
var router = express.Router();
let controller = require('../controllers/registerController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register', controller.register);


module.exports = router;
