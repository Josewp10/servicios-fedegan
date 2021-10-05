const express = require('express');
const { PagosController } = require('../controllers/pagos');
const {success, errorResponse} = require('../../utils/responses');

const router = express.Router();
const _pagosController = new PagosController;

  
router.get('/pagos', async (req, res) => {
    try {
       let resp = await _pagosController.consultarPagos();
        success(req, res, 'Pagos', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

router.get('/pagos/:id_pago', async (req, res) => {
    let id_pago = req.params.id_pago;
    try {
      let resp = await _pagosController.consultarPago(id_pago)
      success(req, res, 'Pago', resp, 200);
      
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
     
});

router.post('/pagos', async (req, res) => {
    try {
         let pagos = req.body.lista_pagos;
  
        await _pagosController.crearPagos(pagos);
        success(req, res, 'Pago creado', null, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
  });

  
module.exports = router;