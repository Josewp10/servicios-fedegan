const express = require('express');
const { vacunadoresController } = require('../controllers/vacunadores');
const {success, errorResponse} = require('../../utils/responses');

const router = express.Router();
const _vacunadoresController = new vacunadoresController;

  
router.get('/vacunadores', async (req, res) => {
    try {
       let resp = await _vacunadoresController.consultarVacunadores();
        success(req, res, 'Vacunadores', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

router.get('/vacunadores/:id_vacunador', async (req, res) => {
    let id_vacunador = req.params.id_vacunador;
    try {
      let resp = await _vacunadoresController.consultarVacunador(id_vacunador)
      success(req, res, 'Vacunador', resp, 200);
      
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
     
});

router.post('/vacunadores', async (req, res) => {
    try {
      let vacunadores = req.body.lista_vacunadores;
      await _vacunadoresController.crearVacunadores(vacunadores);
      success(req, res, 'Vacunador creado', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });


  router.delete('/vacunadores', async (req, res) => {
    let lista_ids = req.query.lista_ids;
    try {
      await _vacunadoresController.eliminarVacunadores(lista_ids);
      success(req, res, 'Vacunadores eliminados', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  
  });

router.delete('/vacunadores/:id_vacunador', async (req, res) => {
  let id_vacunador = req.params.id_vacunador;

  try {
    await _vacunadoresController.eliminarVacunador(id_vacunador);
    success(req, res, 'Vacunador eliminado', null, 200);
  } catch (error) {
    errorResponse(req, res, 'ERROR', error);
  }

});

router.put("/vacunadores", async (req, res) => {
  try {
    let lista_ids = req.query.lista_ids;
    let vacunadores = req.body.lista_vacunadores;

    await _vacunadoresController.actualizarVacunadores(vacunadores, lista_ids)
    success(req, res, 'Vacunadores modificados', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

router.put("/vacunadores/:id_vacunador", async (req, res) => {
  try {
    let id_vacunador = req.params.id_vacunador;
    let vacunador = req.body.lista_vacunadores;

    await _vacunadoresController.actualizarVacunador(vacunador, id_vacunador);
    success(req, res, 'Vacunador modificado', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

  
module.exports = router;