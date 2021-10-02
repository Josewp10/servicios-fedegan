    let posicionPedido=(lista, id_pedido)=>{
        for (let i = 0; i <= lista.length; i++) {
            if (lista[i].id_pedido==id_pedido) {
                return i;
            }
        }
    }

    let posicionesPedidos=(lista, lista_id_pedido)=>{
        let posicion=[];

        for (let i = 0; i <= lista_id_pedido.length; i++) {
            for (let j = 0; j < lista.length; j++) {
            
                if (lista_id_pedido[i].id_pedido==lista[j].id_pedido) {
                    posicion.push(j);
                }
            }
        }

        return posicion;
    }
module.exports={posicionPedido,posicionesPedidos}