const db = require('../database/models');
module.exports = {
    
   home:(req,res)=>{

    let operaciones = db.Operaciones.findOne().then((result) => {
      
       db.Categorias.findAll({
       
      
         where:{
            idoperaciones:result.idoperaciones
         }

       })
       console.log(operaciones)



   })





}
}