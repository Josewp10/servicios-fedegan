const express = require('express');
const { ProductosController } = require('../controllers/productos');
const {success, errorResponse} = require('../../utils/responses');

const router = express.Router();
const _productosController = new ProductosController;

  
router.get('/productos', async (req, res) => {
    try {
       let resp = await _productosController.consultarProductos();
        success(req, res, 'Productos', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

router.get('/productos/:id_producto', async (req, res) => {
    let id_producto = req.params.id_producto;
    try {
      let resp = await _productosController.consultarProducto(id_producto)
      success(req, res, 'Producto', resp, 200);
      
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
     
});

router.post('/productos', async (req, res) => {
    try {
      let productos = req.body.lista_productos;
  
      await _productosController.crearProductos(productos);
      success(req, res, 'Producto creado', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });


  router.delete('/productos', async (req, res) => {
    let lista_ids = req.query.lista_ids;
    try {
      await _productosController.eliminarProductos(lista_ids);
      success(req, res, 'Productos eliminados', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  
  });

router.delete('/productos/:id_producto', async (req, res) => {
  let id_producto = req.params.id_producto;

  try {
    await _productosController.eliminarProducto(id_producto);
    success(req, res, 'Producto eliminado', null, 200);
  } catch (error) {
    errorResponse(req, res, 'ERROR', error);
  }

});

router.put("/productos", async (req, res) => {
  try {
    let lista_ids = req.query.lista_ids;
    let productos = req.body.lista_productos;

    await _productosController.actualizarProductos(productos, lista_ids)
    success(req, res, 'Productos modificados', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

router.put("/productos/:id_producto", async (req, res) => {
  try {
    let id_producto = req.params.id_producto;
    let producto = req.body;

    await _productosController.actualizarProducto(producto, id_producto);
    success(req, res, 'Producto modificado', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

  
module.exports = router;