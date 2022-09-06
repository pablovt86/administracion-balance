module.exports = (Sequelize, dataTypes)=>{
    const alias ='User';

    const cols = {
        idusers: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        lastname: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        date: {
            type: dataTypes.DATE,
            allowNull: false
        },

        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        password: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
      

   
    };

    const config = {
        tableName: 'users',
        timestamps: false

     
    };

    const Usuario = Sequelize.define(alias, cols, config);

    // Usuario.associate = (models)=>{
    //     Usuario.belongsTo(models.Operaciones, {
    //         as: 'operaciones',
    //         foreignKey: 'idusuario'
    //     });
    // };

    return Usuario;
}