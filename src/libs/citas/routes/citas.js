const express = require('express');
const { CitasController } = require('../controllers/citas');
const {success, errorResponse} = require('../../utils/responses');

const router = express.Router();
const _citasController = new CitasController;

  
router.get('/citas', async (req, res) => {
    try {
       let resp = await _citasController.consultarCitas();
        success(req, res, 'citas', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

router.get('/citas/:id_cita', async (req, res) => {
    let id_cita = req.params.id_cita;
    try {
      let resp = await _citasController.consultarCita(id_cita)
      success(req, res, 'cita', resp, 200);
      
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
     
});

router.post('/citas', async (req, res) => {
    try {
      let citas = req.body.lista_citas;
  
      await _citasController.crearCitas(citas);
      success(req, res, 'Cita creada', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });


  router.delete('/citas', async (req, res) => {
    let lista_ids = req.query.lista_ids;
    try {
      await _citasController.eliminarCitas(lista_ids);
      success(req, res, 'citas eliminadas', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  
  });

router.delete('/citas/:id_cita', async (req, res) => {
  let id_cita = req.params.id_cita;

  try {
    await _citasController.eliminarCita(id_cita);
    success(req, res, 'cita eliminada', null, 200);
  } catch (error) {
    errorResponse(req, res, 'ERROR', error);
  }

});


router.put("/citas", async (req, res) => {
    try {
      let lista_ids = req.query.lista_ids;
      let citas = req.body.lista_citas;
  
      await _citasController.actualizarCitas(citas, lista_ids)
      success(req, res, 'Citas modificados', null, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
  });

router.put("/citas/:id_cita", async (req, res) => {
  try {
    let id_cita = req.params.id_cita;
    let cita = req.body;

    await _citasController.actualizarCita(cita, id_cita);
    success(req, res, 'cita modificada', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

  
module.exports = router;