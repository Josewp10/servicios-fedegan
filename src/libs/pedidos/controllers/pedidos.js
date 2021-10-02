const fakePedidos = require('../../../database/fake-db/pedidos');

const {PedidosDAO} = require('../DAO/pedidos');
const pedidosDAO = new PedidosDAO;

class pedidosController{

    validarPedidos(pedido){
        if (!pedido) {
            throw 'Ingrese el pedido';
        }else if(!pedodo.id_pedido){
            throw 'Ingrese el id del producto';
        }else if(!pedido.productos){
            throw 'Ingrese los productos del pedido';
        }else if(!pedido.direccion_envio){
            throw 'Ingrese la dirección de envío'
        }else if(!pedido.fecha_envio){
            throw 'Ingrese la fecha de envío'
        }else if(!pedido.metodo_pago){
            throw 'Ingrese el método de pago'
        }
    }

    consultarPedidos(){
        return pedidosDAO.consultarPedidos();
    }

    consultarPedido(id_pedido){
        let posicion = posicionPedido(fakePedidos.pedidos, id_pedido);
        return pedidosDAO.consultarPedido(posicion);
    }

    crearPedido(pedido){
        pedidosDAO.crearPedido(pedido);
    }

    eliminarPedidos(lista_id_pedido){
        let posiciones_pedidos = posicionesPedidos(fakePedidos.pedidos, lista_id_pedido);
        pedidosDAO.eliminarPedidos(posiciones_pedidos);
    }

    eliminarPedido(id_pedido){
        let posicion = posicionPedido(fakePedidos.pedidos, id_pedido);
        pedidosDAO.eliminarPedido(posicion);
    }
    
    actualizarPedidos(pedidos){
        let posiciones_pedidos = posicionesPedidos(fakePedidos.pedidos, lista_id_pedido);
        pedidosDAO.actualizarPedidos(pedidos, posiciones_pedidos)
    }

    actualizarPedido(pedido){
        let posicion = posicionPedido(fakePedidos.pedidos, pedido.id_pedido);
        pedidosDAO.actualizarPedido(pedido, posicion);
    }
}

module.exports={pedidosController}