const fakeCitas = require('../../../database/fake-db/citas');
const {Listas} = require('../../utils/listas')
const _listas = new Listas;
const {CitasDAO} = require('../DAO/citas');
const _citasDAO = new CitasDAO;


class CitasController{

    validarCitas(cita){
        if (!cita) {
            throw 'Ingrese el cita';
        }else if(!cita.id_cita){
            throw 'Ingrese el id del producto';
        }else if(!cita.fecha){
            throw 'Ingrese la fecha de la cita';
        }else if(!cita.finca){
            throw 'Ingrese el nombre de la finca'
        }else if(!cita.dosis_a_aplicar){
            throw 'Ingrese la dosis aplicar'
        }else if(!cita.detalle){
            throw 'Ingrese el detalle de la cita'
        }
    }

    async consultarCitas(){
        return _citasDAO.consultarCitas();
    }

    async consultarCita(id_cita){
        let posicion = _listas.posicionEnLista(fakeCitas.citas, id_cita);
        return _citasDAO.consultarCita(posicion);
    }

    async crearCitas(citas){
        _listas.enLista(fakeCitas.citas,citas)
        _citasDAO.crearCitas(citas);
    }

    async eliminarCitas(lista_id_cita){
        let posiciones_citas = _listas.posicionesEnLista(fakeCitas.citas, lista_id_cita);
        _citasDAO.eliminarCitas(posiciones_citas);
    }

    async eliminarCita(id_cita){
        let posicion = _listas.posicionEnLista(fakeCitas.citas, id_cita);
        _citasDAO.eliminarCita(posicion);
    }
    
    async actualizarCitas(citas, lista_ids){
        _listas.mismoId(citas, lista_ids);
        let posiciones_citas = _listas.posicionesEnLista(fakeCitas.citas, lista_ids);
        _citasDAO.actualizarCitas(citas, posiciones_citas)
    }

    async actualizarCita(cita, id_cita){
        _listas.mismoId([cita], [id_cita]);
        let posicion = _listas.posicionEnLista(fakeCitas.citas, cita.id);
        _citasDAO.actualizarCita(cita, posicion);
    }
}

module.exports={CitasController}