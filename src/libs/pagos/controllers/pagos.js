const fakePagos = require('../../../database/fake-db/pagos');
const {Listas} = require('../../utils/listas')
const _listas = new Listas;
const {PagosDAO} = require('../DAO/pagos');
const _pagosDAO = new PagosDAO;


class PagosController{

    validarPagos(pago){
        if (!pago) {
            throw 'Ingrese el pago';
        }else if(!pedodo.id){
            throw 'Ingrese el id del producto';
        }else if(!pago.tipo_pago){
            throw 'Ingrese el tipo pago';
        }else if(!pago.metodo_pago){
            throw 'Ingrese el metodo pago'
        }else if(!pago.fecha_pago){
            throw 'Ingrese la fecha de pago'
        }
    }

    async consultarPagos(){
        return _pagosDAO.consultarPagos();
    }

    async consultarPago(id_pago){
        let posicion = _listas.posicionEnLista(fakePagos.pagos, id_pago);
        return _pagosDAO.consultarPago(posicion);
    }

    async crearPagos(pagos){
        _listas.enLista(fakePagos.pagos,pagos)
        _pagosDAO.crearPagos(pagos);
    }
}

module.exports={PagosController}