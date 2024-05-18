const express = require('express');
const router = express.Router();
const Usuario= require('../model/modelUser');
const Pedido= require('../model/modelPedido')
const Sequelize = require('../db/dbConexion') 
const renderIndex= (req,res)=>{
    res.render('inicio')
}
const renderMotivos=(req,res)=>{
    res.render('motivoOracion')
}
const renderContacto=(req,res)=>{
    res.render('contacto');
}
const renderMinisterios=(req,res)=>{
    res.render('ministerios');
}
const renderSiembra=(req,res)=>{
    res.render('siembra');
}
const renderHombres=(req,res)=>{
    res.render('hombres');
}
const renderCitaKids=(req,res)=>{
    res.render('citaKids');
}
const renderMatrimonios=(req,res)=>{
    res.render('matrimonios');
}
const renderMusica=(req,res)=>{
    res.render('musicos');
}
const renderMujeres=(req,res)=>{
  res.render('mujeres');
}


const createUser = async (req, res) => {
 
  const {id_user,name_user, email,  telefono,mensaje } = req.body;
  try {
    

    const newUser = await Usuario.create({
      
      id_user,
      name_user,
      email,
      telefono,
      mensaje
    });

    console.log("Usuario creado con éxito");
    res.status(200).json(newUser);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Error al crear un usuario" });
  }
}

const getUser = async (req, res) => {
  try {
    const users = await Usuario.findAll();
    console.log(users)
    if (users.length === 0) {
      res.render('getUser', { message: 'No hay usuarios registrados.' });
    } else {
      res.render('getUser', { users: users });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al obtener los usuarios!");
  }
};




const deleteUserForm = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id); 
    if (!usuario) { 
      return res.status(404).send("Usuario no encontrado");
    }

    res.render('deleteUser', { usuario }); 
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al cargar el usuario.");
  }
};


const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id); 
    if (!usuario) { 
      return res.status(404).send("Usuario no encontrado");
    }

    await usuario.destroy(); 
    res.send("Usuario eliminado con éxito");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al eliminar el usuario.");
  }
};

  const crearMotivoOracion = async (req, res) => {
    const { id_user, id_pedido, pedido ,nombre, email, telefono} = req.body;
  
    try {
      const newPedido = await Pedido.create({
        id_pedido: parseInt(id_pedido),
        pedido,
        nombre,
        email,
        telefono: parseInt(telefono),
       id_user: parseInt(id_user)
      });
  
      console.log('Motivo de oración creado con éxito');
      res.status(200).json(newPedido);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al crear el usuario!!' });
    }
  };

  const getPedido= async (req, res)=>{
    try{
  const pedidos= await Pedido.findAll();
  res.status(200).json(pedidos);
    }catch(err){
      comsole.log(err);
      res.status(500).send("Error al obtener los pedidos de orarción")
    }
  }


const deletePedidoForm = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).send("Pedido no encontrado");
    }

    res.render('deletePedido', { pedido });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al cargar el pedido.");
  }
};


const deletePedido = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).send("Pedido no encontrado");
    }

    await pedido.destroy();
    res.send("Pedido eliminado correctamente");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al eliminar el pedido.");
  }
};


module.exports = {renderIndex, renderContacto,renderMinisterios,
     renderSiembra, renderHombres,renderCitaKids,
     renderMatrimonios,getUser, renderMusica,createUser,renderMotivos ,
     renderMujeres,deletePedido,
     deleteUser, getPedido, deleteUserForm,crearMotivoOracion,deletePedidoForm}