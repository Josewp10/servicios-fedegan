const express = require('express');
const { SociosController } = require('../controllers/socios');
const {success, errorResponse} = require('../../utils/responses');

const router = express.Router();
const _sociosController = new SociosController;

  
router.get('/socios', async (req, res) => {
    try {
       let resp = await _sociosController.consultarSocios();
        success(req, res, 'Socios', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

router.get('/socios/:id_socio', async (req, res) => {
    let id_socio = req.params.id_socio;
    try {
      let resp = await _sociosController.consultarSocio(id_socio)
      success(req, res, 'Socio', resp, 200);
      
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
     
});

router.post('/socios', async (req, res) => {
    try {
      let socio = req.body;
  
      let resp = await _sociosController.crearSocio(socio);
      success(req, res, 'Socio creado', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });

router.put("/socios", async (req, res) => {
  try {
    let lista_ids = req.query.lista_ids;
    let socio = req.body.lista_socios;

    await _sociosController.actualizarSocios(socio, lista_ids)
    success(req, res, 'Socios modificados', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

router.put("/socios/:id_socio", async (req, res) => {
  try {
    let id_socio = req.params.id_socio;
    let socio = req.body;

    await _sociosController.actualizarSocio(socio, id_socio);
    success(req, res, 'Socio modificado', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

  
module.exports = router;