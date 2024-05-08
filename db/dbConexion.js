const Sequelize = require('sequelize');
const sequelize = new Sequelize('citamontecristo', 'root', 'Capitan20#', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('CONEXION EXITOSA');
  })
  .catch(err => {
    console.log('ERROR EN LA CONEXION' + err);
  });

module.exports = sequelize;
