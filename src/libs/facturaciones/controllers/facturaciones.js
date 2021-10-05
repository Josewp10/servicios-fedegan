const fakeFacturaciones = require('../../../database/fake-db/facturaciones');
const {Listas} = require('../../utils/listas')
const _listas = new Listas;
const {facturacionesDAO} = require('../DAO/facturaciones');
const _facturacionesDAO = new facturacionesDAO;


class facturacionesController{

    validarFacturas(facturas){
        if (!facturas) {
            throw 'Ingrese la factura';
        }else if(!facturas.id_factura){
            throw 'Ingrese el id del producto';
        }else if(!facturas.fecha){
            throw 'Ingrese el NIT de la federacion';
        }else if(!facturas.detalle){
            throw 'Ingrese el nombre de la federacion'
        }else if(!facturas.productos){
            throw 'Ingrese detalles de la federacion'
        }else if(!facturas.precioProductos){
            throw 'Ingrese ubicacion de la federacion'
        }else if(!facturas.valorTotal){
            throw 'Ingrese telefono de la federacion'
        }
    }

    async consultarFacturas(){
        return _facturacionesDAO.consultarFacturas();
    }

    async consultarFactura(id_factura){
        let posicion = _listas.posicionEnLista(fakeFacturaciones.facturaciones, id_factura);
        return _facturacionesDAO.consultarFactura(posicion);
    }

    async crearFacturas(facturas){
        _listas.enLista(fakeFacturaciones.facturaciones,facturas)
        _facturacionesDAO.crearFacturas(facturas);
    }
}

module.exports={facturacionesController}