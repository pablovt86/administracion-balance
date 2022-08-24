module.exports = (Sequelize, dataTypes)=>{
    const alias ='Usuario';

    const cols = {
        idusuarios: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        apellido: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        fecha: {
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
        idoperaciones: {
            type: dataTypes.INTEGER,
            allowNull:false
        }

   
    };

    const config = {
        tableName: 'usuarios',
        timestamps: false

     
    };

    const Usuario = Sequelize.define(alias, cols, config);

    Usuario.associate = (models)=>{
        Usuario.hasOne(models.Operaciones, {
            as: 'operaciones',
            foreignKey: 'idusuario'
        });
    };

    return Usuario;
}