const fakeFacturaciones = require('../../../database/fake-db/facturaciones');


class facturacionesDAO{

    consultarFacturas(){
        return fakeFacturaciones.facturaciones;
    }

    consultarFactura(posicion_factura){
        return fakeFacturaciones.facturaciones[posicion_factura];
    }

    crearFacturas(facturas){
        for (let i = 0; i < facturas.length; i++) {
            fakeFacturaciones.facturaciones.push(facturas[i]);
        }  
    }

}

module.exports={facturacionesDAO}