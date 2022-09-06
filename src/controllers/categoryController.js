const {validationResult} = require('express-validator')
const db = require('../database/models')

let categoryController = {

    index:(req,res)=>{

     db.Category.findAll().then((category)=>{

      res.render('category/index',{
        category,
        title:'category',
        session:req.session
    })

     }).catch((err)=>{console.log(err)})
 
    },

create:(req,res)=>{
   
  res.render('category/create',{
     title:'Crear',
     session:req.session

  })


},
store:(req,res)=>{

    let errors = validationResult(req);

     if(errors.isEmpty()){

    
   let { name , description} = req.body;
   db.Category.create({
       name,
       description

      }).then((result) => {

        res.redirect('/category')
        
      }).catch((err) => {
       

       console.log(err)

      });

     }else{
      res.render('category/create', {

        errors:errors.mapped(),
        sesion: req.session,
        old: req.body


       })
     }

      

},
edit:(req,res)=>{
 db.Category.findByPk(req.params.id).then((category) => {

  console.log(category)

  res.render('category/edit',{
    title:'edit',
    category
    
     })
  
 }).catch((err) => {
  console.log(err)
 });



},
update:(req,res)=>{

 let errors = validationResult(req);
   if (errors.isEmpty()) {
      let {name, description} = req.body;
      db.Category.update({
        name,
        description

      },{where: {idcategory: req.params.id}}).then(()=>{
        
        res.redirect('/category')

      }).catch((err)=>{
      console.log(err)

      })

  

    }else{

      res.render('category/edit', {

        error:errors.mapped(),
        session:req.session,
        old:req.body
      })

    }
      
  
   

    
   },
   destroy:(req,res)=>{
          
    db.Category.destroy({
      where: {
          idcategory: req.params.id
      }
  })    .then(() => {
        res.redirect('/category')
        
      }).catch((err) => {
        console.log(err)
        
      });

   }
   



}




module.exports = categoryController;