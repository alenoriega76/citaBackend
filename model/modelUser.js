const Sequelize = require('../db/dbConexion');
const { DataTypes } = require('sequelize');

const Usuario = Sequelize.define('usuario', {
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name_user: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.INTEGER,
  },
   mensaje :{
    type: DataTypes.TEXT,
   }
}, {
  tableName: 'usuarios', 
  timestamps: false, 
});


 

module.exports =Usuario