const fakeFacturaciones = require('../../../database/fake-db/facturaciones');


class facturacionesDAO{

    consultarFederaciones(){
        return fakeFacturaciones.facturaciones;
    }

    consultarFederacion(posicion_factura){
        return fakeFacturaciones.facturaciones[posicion_factura];
    }

    crearFacturas(facturas){
        for (let i = 0; i < facturas.length; i++) {
            fakeFacturaciones.facturaciones.push(facturas[i]);
        }  
    }

}

module.exports={facturacionesDAO}