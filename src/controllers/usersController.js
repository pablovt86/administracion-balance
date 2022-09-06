const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
// const fs = require('fs');
// const path = require('path');

let usersController ={


register:(req,res)=>{
   res.render('users/register', {

      title:"register",
      session: req.session

   })
},   

processRegister:(req,res)=>{

         let errors = validationResult(req);
       if (errors.isEmpty()) {
        let {name,lastname,date,email, password} = req.body;

        db.User.create({
          
            name,
            lastname,
            date,
            email,
            password: bcrypt.hashSync(password, 10),

        }).then((user) => {

            res.redirect('/users/login')
            
        }).catch((err) => {
            console.log(err)
            
        });
        
       }else{

        res.render('register',{
            errors: errors.mapped(),
            session: req.session,
            old: req.body
        })
       }

},
login:(req,res)=>{
       
    res.render('users/login',{
        session:req.session,
        title:'login'
        
    })

  },
  processLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((user) => {
            req.session.user = {
                id: user.idusers,
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }
            res.render('home',{
             user,
            session:req.session.user,
             title:'home'
             
            })

        })

    }else{
        res.render('users/login',{
          title:'login',
          errors:errors.mapped(),
          session:req.session,
          old:req.body            

        })

    }

  }
}

module.exports = usersController;