const fakeVacunadores = require('../../../database/fake-db/vacunadores');
const {Listas} = require('../../utils/listas')
const _listas = new Listas;
const {VacunadoresDAO} = require('../DAO/vacunadores');
const _vacunadoresDAO = new VacunadoresDAO;


class vacunadoresController{

    validarVacunadores(vacunador){
        if (!vacunador) {
            throw 'Ingrese el vacunador';
        }else if(!vacunador.id_vacunador){
            throw 'Ingrese el id del vacunador';
        }else if(!vacunador.cedula){
            throw 'Ingrese la cedula del vacunador';
        }else if(!vacunador.nombre){
            throw 'Ingrese el nombre del vacunador'
        }else if(!vacunador.empresaAlaquePertenece){
            throw 'Ingrese empresa a la que pertenece el vacunador'
        }else if(!vacunador.correo){
            throw 'Ingrese el correo del vacunador'
        }else if(!vacunador.telefono){
            throw 'Ingrese el telefono del vacunador'
        }
    }

    async consultarVacunadores(){
        return _vacunadoresDAO.consultarVacunadores();
    }

    async consultarVacunador(id_vacunador){
        let posicion = _listas.posicionEnLista(fakeVacunadores.vacunadores, id_vacunador);
        return _vacunadoresDAO.consultarVacunador(posicion);
    }

    async crearVacunadores(vacunadores){
        _listas.enLista(fakeVacunadores.vacunadores,vacunadores)
        _vacunadoresDAO.crearVacunadores(vacunadores);
    }

    async eliminarVacunadores(lista_id_vacunador){
        let posiciones_vacunadores = _listas.posicionesEnLista(fakeVacunadores.vacunadores, lista_id_vacunador);
        console.log(posiciones_vacunadores);
        _vacunadoresDAO.eliminarVacunadores(posiciones_vacunadores);
    }

    async eliminarVacunador(id_vacunador){
        let posicion = _listas.posicionEnLista(fakeVacunadores.vacunadores, id_vacunador);
        _vacunadoresDAO.eliminarVacunador(posicion);
    }
    
    async actualizarVacunadores(vacunador, lista_ids){
        _listas.mismoId(vacunador, lista_ids);
        let posiciones_vacunadores = _listas.posicionesEnLista(fakeVacunadores.vacunadores, lista_ids);
        _vacunadoresDAO.actualizarVacunadores(vacunador, posiciones_vacunadores)
    }

    async actualizarVacunador(vacunador, id_vacunador){
        _listas.mismoId([vacunador], [id_vacunador]);
        let posicion = _listas.posicionEnLista(fakeVacunadores.vacunadores, id_vacunador);
        _vacunadoresDAO.actualizarVacunador(vacunador, posicion);
    }
}

module.exports={vacunadoresController}