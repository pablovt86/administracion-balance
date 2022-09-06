var express = require('express');
var router = express.Router();
let {register,processRegister,login,processLogin} = require('../controllers/usersController');
// let registerValidation = require('../validation/registerValidation');
let loginValidation = require('../validation/loginValidation');

// let authUser = require('../middleware/authUser');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register', register);
router.post('/register', processRegister);

router.get('/login', login);
router.post('/login',loginValidation, processLogin);

// 
module.exports = router;
