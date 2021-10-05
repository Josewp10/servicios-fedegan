const fakePedidos = require('../../../database/fake-db/pedidos');


class PedidosDAO{

    consultarPedidos(){
        return fakePedidos.pedidos;
    }

    consultarPedido(posicion_pedido){
        return fakePedidos.pedidos[posicion_pedido];
    }

    crearPedidos(pedidos){
        for (let i = 0; i < pedidos.length; i++) {
            fakePedidos.pedidos.push(pedidos[i]);
        }   
    }

    eliminarPedidos(posiciones_pedidos){
        for (let i = 0; i <= posiciones_pedidos.length; i++) {
            fakePedidos.pedidos.splice(posiciones_pedidos[i],1);
        }        
    }

    eliminarPedido(posicion){
        fakePedidos.pedidos.splice(posicion,1);
    }
    
    actualizarPedidos(pedidos, posiciones_pedidos){
        for (let i = 0; i <= pedidos.length; i++) {
            let posicion=posiciones_pedidos[i];
            fakePedidos.pedidos[posicion]=pedidos[i];
        }       
    }

    actualizarPedido(pedido, posicion){
        fakePedidos.pedidos[posicion]=pedido;
    }
}

module.exports={PedidosDAO}