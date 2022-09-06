const express = require('express');
const router = express.Router();
const {index, create,store , edit, update, destroy} = require('../controllers/categoryController');
const categoryValidation = require('../validation/categoryValidation');

router.get('/', index);
router.get('/create', create);
router.post('/create',categoryValidation, store);
router.get('/edit/:id', edit);
router.put('/update/:id',categoryValidation, update);
router.delete('/destroy/:id', destroy);



module.exports = router;