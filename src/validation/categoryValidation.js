const {check} = require('express-validator');


module.exports = 

   [
    check('name').trim()
    .notEmpty()
    .withMessage('el campo no puede estar vacio')
    .isLength({min: 3, max: 20})
    .withMessage('Escriba entre 3 y 20 caracteres.'),

    check('description')
    .notEmpty()
    .withMessage('no campo no puede estar vacio')
    .isLength({min:6 , max:45})
    .withMessage('Escribe entre 6 y 45 Caracteres ')


   ]




