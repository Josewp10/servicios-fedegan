const fakeNotificaciones = require('../../../database/fake-db/notificaciones');


class NotificacionesDAO{

    consultarNotificaciones(){
        return fakeNotificaciones.notificaciones;
    }

    consultarNotificacion(posicion_notificacion){
        return fakeNotificaciones.notificaciones[posicion_notificacion];
    }

    crearNotificacion(notificacion){
        fakeNotificaciones.notificaciones.push(notificacion);
    }

    eliminarNotificaciones(posiciones_notificaciones){
        for (let i = 0; i < posiciones_notificaciones.length; i++) {
            fakeNotificaciones.notificaciones.splice(posiciones_notificaciones[i],1);
        }        
    }

    eliminarNotificacion(posicion){
        fakeNotificaciones.notificaciones.splice(posicion,1);
    }
    
    
}

module.exports={NotificacionesDAO}