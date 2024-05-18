const express = require('express');
const router = express.Router();
const { renderIndex, renderContacto, deleteUser, getUser, crearMotivoOracion, renderMinisterios, renderSiembra, renderMusica,
    renderMujeres, renderMatrimonios, deleteUserForm,deletePedidoForm, deletePedido, getPedido, renderCitaKids, renderHombres, createUser } = require('../controllers/indexControllers');
const validate = require('../middleware/validate');
const validatePedido = require('../middleware/validatePedido');

// RUTAS
router.get('/', renderIndex);
router.post('/contacto', validate, createUser);
router.get('/ministerios', renderMinisterios);
router.get('/calendario', renderSiembra);
router.get('/musicos', renderMusica);
router.get('/matrimonios', renderMatrimonios);
router.get('/citakids', renderCitaKids);
router.get('/hombres', renderHombres);
router.post('/motivos', crearMotivoOracion);
router.get('/mujeres', renderMujeres);

// RUTAS ADMIN
router.get('/getuser', getUser);
router.get('/getpedido', getPedido);
router.get('/deleteuser/:id', deleteUserForm);
router.post('/deleteuser/:id', deleteUser);
router.get('/eliminarpedido/:id', deletePedidoForm);
router.post('/eliminarpedido/:id', deletePedido);

module.exports = router;
