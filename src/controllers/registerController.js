// const { validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
// const db = require('../database/models');
// const fs = require('fs');
// const path = require('path');

let usersController ={


register:(req,res)=>{


   res.render('users/register', {

      title:"register",
      session: req.session
   })
   

}    



}

module.exports = usersController;