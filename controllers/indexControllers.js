const express = require('express');
const router = express.Router();
const usuario= require('../model/modelUser');
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
    const { id_user, name_user, email, telefono, mensaje } = req.body;
    const mensajeValue = typeof mensaje === 'string' && mensaje.trim() !== '' ? mensaje.trim() : null;
    console.log('Valor de mensaje recibido:', mensajeValue); 
    try {
      const newUser = await usuario.create({
        id_user, name_user, email, telefono, mensaje: mensajeValue
      });
      console.log("Usuario Creado Con Éxito");
      res.status(200).json(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error al crear el usuario" });
    }
  };

const getUser = async (req,res)=>{
  try{
const users = await usuario.findAll();
res.render('getUser',{users : users});
  }catch(err){
    comsole.log(err);
    res.status(500).send("Error al obtener los usuarios!")
  }
}
const deleteUser= async (req,res)=>{
  const {id} =req.params;
  try{
    const usuario= await usuario.findByPk(id);
    if(!user){
      
      return res.status(404).send("Usuario no encontrado");
    }
    await user.destroy();
    res.status(200).send("Usuario eliminado con éxito");
  } catch(err){
    comsole.log(err);
    res.status(500).send(" Error al eliminar el usuario");
  }
  
}

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

  const deletePedido = async (req, res) => {
    const { id } = req.params;
    console.log("ID del pedido a eliminar:", id);
    try {
        // Busca el pedido por su ID
        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
            return res.status(404).send("Pedido no encontrado");
        }

        // Elimina el pedido
        await pedido.destroy();
        
        // Envía una respuesta de éxito
        res.status(200).send("Pedido eliminado con éxito");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error al eliminar el pedido.");
    }
};


module.exports = {renderIndex, renderContacto,renderMinisterios,
     renderSiembra, renderHombres,renderCitaKids,
     renderMatrimonios,getUser, renderMusica,createUser,renderMotivos ,
     renderMujeres,deletePedido,
     deleteUser, getPedido,crearMotivoOracion}