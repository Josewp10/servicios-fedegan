const fakeSolicitantes = require('../../../database/fake-db/solicitantes');


class SolicitantesDAO{

    consultarSolicitantes(){
        return fakeSolicitantes.solicitantes;
    }

    consultarPedido(posicion_pedido){
        return fakeSolicitantes.solicitantes[posicion_pedido];
    }

    crearSolicitantes(solicitantes){
        for (let i = 0; i < solicitantes.length; i++) {
            fakeSolicitantes.solicitantes.push(solicitantes[i]);
        }   
    }
    
    actualizarSolicitantes(solicitantes, posiciones_solicitantes){
        for (let i = 0; i < solicitantes.length; i++) {
            let posicion=posiciones_solicitantes[i];
            fakeSolicitantes.solicitantes[posicion]=solicitantes[i];
        }       
    }

    actualizarSolicitante(solicitante, posicion){
        fakeSolicitantes.solicitantes[posicion]=solicitante;
    }
}

module.exports={SolicitantesDAO}