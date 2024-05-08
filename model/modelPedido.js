const Sequelize = require('../db/dbConexion');
const { DataTypes } = require('sequelize');

const Pedido = Sequelize.define('MotivoOracion', {
  id_pedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  pedido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
 
},
  {
    tableName: 'pedido_oracion',
    timestamps: false,
  })

  module.exports = Pedido;