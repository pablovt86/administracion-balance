module.exports = (Sequelize, dataTypes)=>{
    const alias = 'Operations';

    const cols = {
        idoperations: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        concept: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        amount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        date: {
            type: dataTypes.DATE,
            allowNull: false
        },

       

        type: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        idusers: {
            type: dataTypes.INTEGER,
            allowNull:false
        },
        idcategory: {
            type: dataTypes.INTEGER,
            allowNull:false
        }
    };

    const config = {
        tableName: 'operations',
        timestamps: false
    };

    const Operations = Sequelize.define(alias, cols, config);

    Operations.associate = (models)=>{
        Operations.hasOne(models.User, {
            as: 'Users',
            foreignKey: 'idusers'
        });

        Operations.associate = (models)=>{
            Operations.hasOne(models.Category, {
                as: 'Category',
                foreignKey: 'idcategory'
            });
           

      

    
    };

   } 
   return Operations;

}