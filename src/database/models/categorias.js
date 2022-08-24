module.exports = (Sequelize, dataTypes)=>{
    const alias = 'Categorias';

    const cols = {
        idcategorias: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        
        descripcion: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        idoperaciones: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        
    };

    const config = {
        tableName: 'categorias',
        timestamps: false
    };

    const Categoria = Sequelize.define(alias, cols, config);

    Categoria.associate = (models)=>{
        Categoria.hasMany(models.Operaciones, {
            as: 'operaciones',
            foreignKey: 'idoperaciones'
        });
    }

    return Categoria;
}