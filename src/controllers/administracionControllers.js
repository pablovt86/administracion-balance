const db = require('../database/models');
module.exports = {
    
   home:(req,res)=>{

    let operaciones = db.Operaciones.findAll().then((result) => {
      db.Categorias.findAll({
         where:{
         idoperaciones:result.idoperaciones
         }
      }).then((response) => {

        let tranferencia = [];
        
        for (let i = 0; i < response.length; i++) {
         tranferencia.push(response[i]);
         
        }      
        
        
        console.log(response);
      }).catch((err) => {
         console.log(err)
      });

      console.log(operaciones)

   }).catch((err) => {
      console.log(err);
    });
     
 
   }





}