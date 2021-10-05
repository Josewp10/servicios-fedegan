const express = require('express');
const { PedidosController } = require('../controllers/pedidos');
const {success, errorResponse} = require('../../utils/responses');

const router = express.Router();
const _pedidosController = new PedidosController;

  
router.get('/pedidos', async (req, res) => {
    try {
       let resp = await _pedidosController.consultarPedidos();
        success(req, res, 'Pedidos', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

router.get('/pedidos/:id_pedido', async (req, res) => {
    let id_pedido = req.params.id_pedido;
    try {
      let resp = await _pedidosController.consultarPedido(id_pedido)
      success(req, res, 'Pedido', resp, 200);
      
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
     
});

router.post('/pedidos', async (req, res) => {
    try {
      let pedidos = req.body.lista_pedidos;
  
      await _pedidosController.crearPedidos(pedidos);
      success(req, res, 'Pedido creado', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });

router.put("/pedidos", async (req, res) => {
  try {
    let lista_ids = req.query.lista_ids;
    let pedidos = req.body.lista_pedidos;

    await _pedidosController.actualizarPedidos(pedidos, lista_ids)
    success(req, res, 'Pedidos modificados', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

router.put("/pedidos/:id_pedido", async (req, res) => {
  try {
    let id_pedido = req.params.id_pedido;
    let pedido = req.body;

    await _pedidosController.actualizarPedido(pedido, id_pedido);
    success(req, res, 'Pedido modificado', null, 200);
  } catch (error) {
      errorResponse(req, res, 'ERROR', error);
  }
});

  
module.exports = router;