const fakePedidos = require('../../../database/fake-db/pedidos');
const {Listas} = require('../../utils/listas')
const _listas = new Listas;
const {PedidosDAO} = require('../DAO/pedidos');
const _pedidosDAO = new PedidosDAO;


class PedidosController{

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

    async consultarPedidos(){
        return _pedidosDAO.consultarPedidos();
    }

    async consultarPedido(id_pedido){
        let posicion = _listas.posicionEnLista(fakePedidos.pedidos, id_pedido);
        return _pedidosDAO.consultarPedido(posicion);
    }

    async crearPedido(pedido){
        _listas.enLista(fakePedidos.pedidos,pedido.id)
        _pedidosDAO.crearPedido(pedido);
    }

    async eliminarPedidos(lista_id_pedido){
        let posiciones_pedidos = _listas.posicionesEnLista(fakePedidos.pedidos, lista_id_pedido);
        _pedidosDAO.eliminarPedidos(posiciones_pedidos);
    }

    async eliminarPedido(id_pedido){
        let posicion = _listas.posicionEnLista(fakePedidos.pedidos, id_pedido);
        _pedidosDAO.eliminarPedido(posicion);
    }
    
    async actualizarPedidos(pedidos, lista_ids){
        _listas.mismoId(pedidos, lista_ids);
        let posiciones_pedidos = _listas.posicionesEnLista(fakePedidos.pedidos, lista_ids);
        _pedidosDAO.actualizarPedidos(pedidos, posiciones_pedidos)
    }

    async actualizarPedido(pedido, id_pedido){
        _listas.mismoId([pedido], [id_pedido]);
        let posicion = _listas.posicionEnLista(fakePedidos.pedidos, pedido.id);
        _pedidosDAO.actualizarPedido(pedido, posicion);
    }
}

module.exports={PedidosController}