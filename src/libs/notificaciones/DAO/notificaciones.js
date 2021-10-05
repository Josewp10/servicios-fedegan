const fakeNotificaciones = require('../../../database/fake-db/notificaciones');


class NotificacionesDAO{

    consultarNotificaciones(){
        return fakeNotificaciones.notificaciones;
    }

    consultarNotificacion(posicion_notificacion){
        return fakeNotificaciones.notificaciones[posicion_notificacion];
    }

    crearNotificaciones(notificaciones){
        for (let i = 0; i < notificaciones.length; i++) {
            fakeNotificaciones.notificaciones.push(notificaciones[i]);
        }  
    }

    eliminarNotificaciones(posiciones_notificaciones){
        for (let i = 0; i < posiciones_notificaciones.length; i++) {
            fakeNotificaciones.notificaciones.splice(posiciones_notificaciones[i],1);
            if (i==0) {
                fakeNotificaciones.notificaciones.splice(posiciones_notificaciones[i],1);
            }else{
                fakeNotificaciones.notificaciones.splice(posiciones_notificaciones[i]-1,1);
            }
        }        
    }

    eliminarNotificacion(posicion){
        fakeNotificaciones.notificaciones.splice(posicion,1);
    }
    
    
}

module.exports={NotificacionesDAO}