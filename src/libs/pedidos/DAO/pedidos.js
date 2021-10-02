const fakePedidos = require('../../../database/fake-db/pedidos');
const {posicionPedido} = require('../helpers/pedidos')

class PedidosDAO{

    consultarPedidos(){
        return fakePedidos.pedidos;
    }

    consultarPedido(posicion_pedido){
        return fakePedidos.pedidos[posicion_pedido];
    }

    crearPedido(pedido){
        fakePedidos.pedidos.push(pedido);
    }

    eliminarPedidos(posiciones_pedidos){
        for (let i = 0; i < posiciones_pedidos.length; i++) {
            fakePedidos.pedidos.splice(posiciones_pedidos[i],1);
        }        
    }

    eliminarPedido(id_pedido){
        let posicion = posicionPedido(fakePedidos.pedidos, id_pedido);
        fakePedidos.pedidos.splice(posicion[i],1);
    }
    
    actualizarPedidos(pedidos, posiciones_pedidos){
        for (let i = 0; i < pedidos.length; i++) {
            let posicion=posiciones_pedidos[i];
            fakePedidos.pedidos[posicion]=pedido;
        }       
    }

    actualizarPedido(pedido, posicion){
        fakePedidos.pedidos[posicion]=pedido;
    }
}

module.exports={PedidosDAO}