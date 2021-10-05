const fakeFederaciones = require('../../../database/fake-db/federaciones');
const {Listas} = require('../../utils/listas')
const _listas = new Listas;
const {federacionesDAO} = require('../DAO/federaciones');
const _federacionesDAO = new federacionesDAO;


class federacionesController{

    validarPedidos(federaciones){
        if (!federaciones) {
            throw 'Ingrese la federacion';
        }else if(!federaciones.id_federacion){
            throw 'Ingrese el id del producto';
        }else if(!federaciones.nit){
            throw 'Ingrese el NIT de la federacion';
        }else if(!federaciones.nombre){
            throw 'Ingrese el nombre de la federacion'
        }else if(!federaciones.detalles){
            throw 'Ingrese detalles de la federacion'
        }else if(!federaciones.ubicacion){
            throw 'Ingrese ubicacion de la federacion'
        }else if(!federaciones.telefono){
            throw 'Ingrese telefono de la federacion'
        }else if(!federaciones.correo){
            throw 'Ingrese el correo de la federacion'
        }
    }

    async consultarFederaciones(){
        return _federacionesDAO.consultarFederaciones();
    }

    async consultarFederacion(id_federacion){
        let posicion = _listas.posicionEnLista(fakeFederaciones.federaciones, id_federacion);
        return _federacionesDAO.consultarFederacion(posicion);
    }

    async crearFederaciones(federaciones){
        _listas.enLista(fakeFederaciones.federaciones,federaciones)
        _federacionesDAO.crearFederaciones(federaciones);
    }

    async actualizarFederaciones(federaciones, lista_ids){
        _listas.mismoId(federaciones, lista_ids);
        let posiciones_federaciones = _listas.posicionesEnLista(fakeFederaciones.federaciones, lista_ids);
        _federacionesDAO.actualizarFederaciones(federaciones, posiciones_federaciones)
    }

    async actualizarFederacion(federaciones, id_federacion){
        _listas.mismoId([federaciones], [id_federacion]);
        let posicion = _listas.posicionEnLista(fakeFederaciones.federaciones, federaciones.id_federacion);
        _federacionesDAO.actualizarFederacion(federaciones, posicion);
    }
}

module.exports={federacionesController}