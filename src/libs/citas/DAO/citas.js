const fakeCitas = require('../../../database/fake-db/citas');


class CitasDAO{

    consultarCitas(){
        return fakeCitas.citas;
    }

    consultarCita(posicion_cita){
        return fakeCitas.citas[posicion_cita];
    }

    crearCita(cita){
        fakeCitas.citas.push(cita);
    }

    eliminarCitas(posiciones_citas){
        for (let i = 0; i <= posiciones_citas.length; i++) {
            fakeCitas.citas.splice(posiciones_citas[i],1);
        }        
    }

    eliminarCita(posicion){
        fakeCitas.citas.splice(posicion,1);
    }
    
    actualizarCitas(citas, posiciones_citas){
        for (let i = 0; i <= citas.length; i++) {
            let posicion=posiciones_citas[i];
            fakeCitas.citas[posicion]=citas[i];
        }       
    }
    
    actualizarCita(cita, posicion){
        fakeCitas.citas[posicion]=cita;
    }
}

module.exports={CitasDAO}