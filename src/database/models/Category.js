module.exports = (Sequelize, dataTypes)=>{
    const alias = 'Category';

    const cols = {
        idcategory: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        
        description: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
       

        
    };

    const config = {
        tableName: 'category',
        timestamps: false
    };

    const Category = Sequelize.define(alias, cols, config);

    // Category.associate = (models)=>{
    //     Category.belongsTo(models.Operation, {
    //         as: 'operations',
    //         foreignKey: 'idoperations'
    //     });
    // }

    return Category;
}