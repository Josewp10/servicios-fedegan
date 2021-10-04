const fakeNotificaciones = require('../../../database/fake-db/notificaciones');
const {Listas} = require('../../utils/listas')
const _listas = new Listas;
const {NotificacionesDAO} = require('../DAO/notificaciones');
const _notificacionesDAO = new NotificacionesDAO;


class NotificacionesController{

    validarNotificaciones(notificacion){
        if (!notificacion) {
            throw 'Ingrese la notificacion';
        }else if(!notificacion.id_notificacion){
            throw 'Ingrese el id de la notificacion';
        }else if(!notificacion.fecha_envio){
            throw 'Ingrese la fecha de envio de la notificacion';
        }else if(!notificacion.mensaje){
            throw 'Ingrese el mensaje que va a colocar en la notifiacion';
        }else if(!notificacion.telefono_socio){
            throw 'Ingrese la fecha de envío';
        }
    }

    async consultarNotificaciones(){
        return _notificacionesDAO.consultarNotificaciones();
    }

    async consultarNotificacion(id_notificacion){
        let posicion = _listas.posicionEnLista(fakeNotificaciones.notificaciones, id_notificacion);
        return _notificacionesDAO.consultarNotificacion(posicion);
    }

    async crearNotificacion(notificacion){
        _listas.enLista(fakeNotificaciones.notificaciones,notificacion.id)
       return _notificacionesDAO.crearNotificacion(notificacion);
    }

    async eliminarNotificaciones(lista_id_notificacion){
        let posiciones_noti = _listas.posicionesEnLista(fakeNotificaciones.notificaciones, lista_id_notificacion);
        return _notificacionesDAO.eliminarNotificaciones(posiciones_noti);
    }

    async eliminarNotificacion(id_notificacion){
        let posicion = _listas.posicionEnLista(fakeNotificaciones.notificaciones, id_notificacion);
         return _notificacionesDAO.eliminarNotificacion(posicion);
    }
    
   
}

module.exports={NotificacionesController}