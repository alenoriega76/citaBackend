const Sequelize = require('../db/dbConexion');
const { DataTypes } = require('sequelize');

const usuario = Sequelize.define('usuario', {
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
  tableName: 'usuarios', // Nombre de la tabla en la base de datos
  timestamps: false, // Indica si se deben incluir las columnas createdAt y updatedAt en la tabla
});


 

module.exports =usuario