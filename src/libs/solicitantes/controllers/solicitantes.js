const fakeSolicitantes = require('../../../database/fake-db/solicitantes');
const {Listas} = require('../../utils/listas')
const _listas = new Listas;
const {SolicitantesDAO} = require('../DAO/solicitantes');
const _solicitantesDAO = new SolicitantesDAO;


class SolicitantesController{

    validarSolicitantes(solicitantes){
        if (!solicitantes) {
            throw 'Ingrese el solicitantes';
        }else if(!solicitantes.id){
            throw 'Ingrese el id del solicitante';
        }else if(!solicitantes.nombre){
            throw 'Ingrese el nombre del solicitante';
        }else if(!solicitantes.cedula){
            throw 'Ingrese la cedula del solicitante'
        }else if(!solicitantes.estado_solicitud){
            throw 'Ingrese el estado de la solicitud'
        }else if(!solicitantes.detalle){
            throw 'Ingrese el detalle de la solicitud'
        }else if(!solicitantes.finca){
            throw 'Ingrese la finca del solicitante'
        }
    }

    async consultarSolicitantes(){
        return _solicitantesDAO.consultarSolicitantes();
    }

    async consultarsolicitante(id_solicitante){
        let posicion = _listas.posicionEnLista(fakeSolicitantes.solicitantes, id_solicitante);
        return _solicitantesDAO.consultarsolicitantes(posicion);
    }

    async crearSolicitantes(solicitantes){
        _listas.enLista(fakeSolicitantes.solicitantes,solicitantes)
        _solicitantesDAO.crearSolicitantes(solicitantes);
    }

    async actualizarSolicitantes(solicitantes, lista_ids){
        _listas.mismoId(solicitantes, lista_ids);
        let posiciones_solicitantes = _listas.posicionesEnLista(fakeSolicitantes.solicitantes, lista_ids);
        _solicitantesDAO.actualizarSolicitantes(solicitantes, posiciones_solicitantes)
    }

    async actualizarSolicitante(solicitantes, id_solicitantes){
        _listas.mismoId([solicitantes], [id_solicitantes]);
        let posicion = _listas.posicionEnLista(fakeSolicitantes.solicitantes, solicitantes.id);
        _solicitantesDAO.actualizarSolicitante(solicitantes, posicion);
    }
}

module.exports={SolicitantesController}