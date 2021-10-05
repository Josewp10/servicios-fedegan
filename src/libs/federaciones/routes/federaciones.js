const express = require('express');
const { federacionesController } = require('../controllers/federaciones');
const {success, errorResponse} = require('../../utils/responses');

const router = express.Router();
const _federacionesController = new federacionesController;

  
router.get('/federaciones', async (req, res) => {
    try {
       let resp = await _federacionesController.consultarFederaciones();
        success(req, res, 'Federaciones', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

router.get('/federaciones/:id_federacion', async (req, res) => {
    let id_federacion = req.params.id_federacion;
    try {
      let resp = await _federacionesController.consultarFederacion(id_federacion)
      success(req, res, 'Federacion', resp, 200);
      
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
     
});

router.post('/federaciones', async (req, res) => {
    try {
      let federaciones = req.body.lista_federaciones;
  
      await _federacionesController.crearFederaciones(federaciones);
      success(req, res, 'Federacion creada', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });

router.put("/federaciones", async (req, res) => {
  try {
    let lista_ids = req.query.lista_ids;
    let federaciones = req.body.lista_federaciones;

    await _federacionesController.actualizarFederaciones(federaciones, lista_ids)
    success(req, res, 'Federaciones modificadas', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

router.put("/federaciones/:id_federacion", async (req, res) => {
  try {
    let id_federacion = req.params.id_federacion;
    let federaciones = req.body;

    await _federacionesController.actualizarFederacion(federaciones, id_federacion);
    success(req, res, 'Federacion modificada', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

  
module.exports = router;