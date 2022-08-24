module.exports = (Sequelize, dataTypes)=>{
    const alias = 'Operaciones';

    const cols = {
        idoperaciones: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        concepto: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        monto: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        fecha: {
            type: dataTypes.DATE,
            allowNull: false
        },

       

        tipo: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        idusuario: {
            type: dataTypes.INTEGER,
            allowNull:false
        }
    };

    const config = {
        tableName: 'operaciones',
        timestamps: false
    };

    const Operaciones = Sequelize.define(alias, cols, config);

    Operaciones.associate = (models)=>{
        Operaciones.belongsTo(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'idusuario'
        });

      

    
    };

    return Operaciones;
}