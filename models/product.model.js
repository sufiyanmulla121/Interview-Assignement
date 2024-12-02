const { DataTypes, Model } = require('sequelize')
const sequelize = require('../configs/db_config')
class Product extends Model { }

Product.init({}, {
    sequelize,
    modelName: 'product',
    tableName: 'Products'
})

module.exports = Product
