const fakePagos = require('../../../database/fake-db/pagos');


class PagosDAO{

    consultarPagos(){
        return fakePagos.pagos;
    }

    consultarPago(posicion_pago){
        return fakePagos.pagos[posicion_pago];
    }

    crearPagos(pagos){
        for (let i = 0; i < pagos.length; i++) {
            fakePagos.pagos.push(pagos[i]);
        }   
    }

}

module.exports={PagosDAO}