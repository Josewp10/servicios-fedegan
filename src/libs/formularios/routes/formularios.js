const express = require('express');
const { FormulariosController } = require('../controllers/formularios');
const {success, errorResponse} = require('../../utils/responses');

const router = express.Router();
const _formulariosController = new FormulariosController;

  
router.get('/formularios', async (req, res) => {
    try {
       let resp = await _formulariosController.consultarFormularios();
        success(req, res, 'formularios', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

router.get('/formularios/:id_formulario', async (req, res) => {
    let id_formulario = req.params.id_formulario;
    try {
      let resp = await _formulariosController.consultarFormulario(id_formulario)
      success(req, res, 'formulario', resp, 200);
      
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
     
});

router.post('/formularios', async (req, res) => {
    try {
      let formularios = req.body.lista_formularios;
  
      await _formulariosController.crearFormularios(formularios);
      success(req, res, 'Formulario creado', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });

router.put("/formularios", async (req, res) => {
  try {
    let lista_ids = req.query.lista_ids;
    let formularios = req.body.lista_formularios;

    await _formulariosController.actualizarFormularios(formularios, lista_ids)
    success(req, res, 'Formularios modificados', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

router.put("/formularios/:id_formulario", async (req, res) => {
  try {
    let id_formulario= req.params.id_formulario;
    let formulario = req.body;

    await _formulariosController.actualizarFormulario(formulario, id_formulario);
    success(req, res, 'formulario modificado', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

  
module.exports = router;