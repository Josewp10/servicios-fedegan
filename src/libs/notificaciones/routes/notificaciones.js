const express = require('express');
const { NotificacionesController } = require('../controllers/notificaciones');
const {success, errorResponse} = require('../../utils/responses');

const router = express.Router();
const _notificacionesController = new NotificacionesController;

  
router.get('/notificaciones', async (req, res) => {
    try {
       let resp = await _notificacionesController.consultarNotificaciones();
        success(req, res, 'Notificaciones', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

router.get('/notificaciones/:id_notificacion', async (req, res) => {
    let id_notificacion = req.params.id_notificacion;
    try {
      let resp = await _notificacionesController.consultarNotificacion(id_notificacion)
      success(req, res, 'Notificacion', resp, 200);
      
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
     
});

router.post('/notificaciones', async (req, res) => {
    try {
      let notificacion = req.body;
  
      let resp = await _notificacionesController.crearNotificacion(notificacion);
      success(req, res, 'Notificacion creada', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });


  router.delete('/notificaciones', async (req, res) => {
    let lista_ids = req.query.lista_ids;
    try {
      await _notificacionesController.eliminarNotificaciones(lista_ids);
      success(req, res, 'Notificacion eliminada', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  
  });

router.delete('/notificaciones/:id_notificacion', async (req, res) => {
  let id_notificacion = req.params.id_notificacion;

  try {
    await _notificacionesController.eliminarNotificacion(id_notificacion);
    success(req, res, 'Notifiacion eliminada', null, 200);
  } catch (error) {
    errorResponse(req, res, 'ERROR', error);
  }

});


  
module.exports = router;