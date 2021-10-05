const fakeVacunadores = require('../../../database/fake-db/vacunadores');


class VacunadoresDAO{

    consultarVacunadores(){
        return fakeVacunadores.vacunadores;
    }

    consultarVacunador(posicion_vacunador){
        return fakeVacunadores.vacunadores[posicion_vacunador];
    }

    crearVacunadores(vacunador){
        for (let i = 0; i < vacunador.length; i++) {
            fakeVacunadores.vacunadores.push(vacunador[i]);
        } 
    }

    eliminarVacunadores(posiciones_vacunadores){
        for (let i = 0; i < posiciones_vacunadores.length; i++) {
           console.log(i-1);
            if (i==0) {
                fakeVacunadores.vacunadores.splice(posiciones_vacunadores[i],1);
            }else{
                fakeVacunadores.vacunadores.splice(posiciones_vacunadores[i]-1,1);
            }
            
        }        
    }

    eliminarVacunador(posicion){
        fakeVacunadores.vacunadores.splice(posicion,1);
    }
    
    actualizarVacunadores(vacunadores, posiciones_vacunadores){
        for (let i = 0; i < vacunadores.length; i++) {
            let posicion=posiciones_vacunadores[i];
            fakeVacunadores.vacunadores[posicion]=vacunadores[i];
        }       
    }

    actualizarVacunador(vacunador, posicion){
        fakeVacunadores.vacunadores[posicion]=vacunador;
    }
}

module.exports={VacunadoresDAO}