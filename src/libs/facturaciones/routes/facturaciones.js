const express = require('express');
const { facturacionesController } = require('../controllers/facturaciones');
const {success, errorResponse} = require('../../utils/responses');

const router = express.Router();
const _facturacionesController = new facturacionesController;

  
router.get('/facturas', async (req, res) => {
    try {
       let resp = await _facturacionesController.consultarFacturas();
        success(req, res, 'Facturas', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

router.get('/facturas/:id_factura', async (req, res) => {
    let id_factura = req.params.id_factura;
    try {
      let resp = await _facturacionesController.consultarFactura(id_factura)
      success(req, res, 'Factura', resp, 200);
      
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
     
});

router.post('/facturas', async (req, res) => {
    try {
      let facturaciones = req.body.lista_facturas;
  
      await _facturacionesController.crearFacturas(facturaciones);
      success(req, res, 'Factura creada', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });

module.exports = router;