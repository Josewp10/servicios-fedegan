const express = require('express');
const { SolicitantesController } = require('../controllers/solicitantes');
const {success, errorResponse} = require('../../utils/responses');

const router = express.Router();
const _solicitantesController = new SolicitantesController;

  
router.get('/solicitantes', async (req, res) => {
    try {
       let resp = await _solicitantesController.consultarSolicitantes();
        success(req, res, 'solicitantes', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

router.get('/solicitantes/:id_solicitantes', async (req, res) => {
    let id_solicitantes = req.params.id_solicitantes;
    try {
      let resp = await _solicitantesController.consultarSolicitantes(id_solicitantes)
      success(req, res, 'solicitantes', resp, 200);
      
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
     
});

router.post('/solicitantes', async (req, res) => {
    try {
      let solicitantes = req.body.lista_solicitantes;
  
      await _solicitantesController.crearSolicitantes(solicitantes);
      success(req, res, 'solicitantes creado', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });

router.put("/solicitantes", async (req, res) => {
  try {
    let lista_ids = req.query.lista_ids;
    let solicitantes = req.body.lista_solicitantes;

    await _solicitantesController.actualizarSolicitantes(solicitantes, lista_ids)
    success(req, res, 'Solicitantes modificados', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

router.put("/solicitantes/:id_solicitante", async (req, res) => {
  try {
    let id_solicitante = req.params.id_solicitante;
    let solicitante = req.body;

    await _solicitantesController.actualizarSolicitante(solicitante, id_solicitante);
    success(req, res, 'Solicitante modificado', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

  
module.exports = router;