const express = require('express');
const { CatalogoController } = require('../controllers/catalogo');
const {success, errorResponse} = require('../../utils/responses');

const router = express.Router();
const _catalogoController = new CatalogoController;

  
router.get('/catalogo', async (req, res) => {
    try {
       let resp = await _catalogoController.consultarCatalogos();
        success(req, res, 'catalogo', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

router.get('/catalogo/:id_catalogo', async (req, res) => {
    let id_catalogo = req.params.id_catalogo;
    try {
      let resp = await _catalogoController.consultarCatalogo(id_catalogo)
      success(req, res, 'catalogo', resp, 200);
      
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
     
});

router.post('/catalogo', async (req, res) => {
    try {
      let catalogo = req.body;
  
      let resp = await _catalogoController.crearCatalogo(catalogo);
      success(req, res, 'Catalogo creado', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });


  router.delete('/catalogo', async (req, res) => {
    let lista_ids = req.query.lista_ids;
    try {
      await _catalogoController.eliminarCatalogos(lista_ids);
      success(req, res, 'Catalogo eliminados', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  
  });

router.delete('/catalogo/:id_catalogo', async (req, res) => {
  let id_catalogo = req.params.id_catalogo;

  try {
    await _catalogoController.eliminarCatalogo(id_catalogo);
    success(req, res, 'Catalogo eliminado', null, 200);
  } catch (error) {
    errorResponse(req, res, 'ERROR', error);
  }

});

router.put("/catalogo", async (req, res) => {
  try {
    let lista_ids = req.query.lista_ids;
    let catalogo = req.body.lista_catalogo;

    await _catalogoController.actualizarCatalogos(catalogo, lista_ids)
    success(req, res, 'Catalogos modificados', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

router.put("/catalogo/:id_catalogo", async (req, res) => {
  try {
    let id_catalogo = req.params.id_catalogo;
    let catalogo = req.body;

    await _catalogoController.actualizarCatalogo(catalogo, id_catalogo);
    success(req, res, 'catalogo modificado', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

  
module.exports = router;