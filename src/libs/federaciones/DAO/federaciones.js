const fakeFederaciones = require('../../../database/fake-db/federaciones');


class federacionesDAO{

    consultarFederaciones(){
        return fakeFederaciones.federaciones;
    }

    consultarFederacion(posicion_federacion){
        return fakeFederaciones.federaciones[posicion_federacion];
    }

    crearFederaciones(federaciones){
        for (let i = 0; i < federaciones.length; i++) {
            fakeFederaciones.federaciones.push(federaciones[i]);
        } 
    }

    actualizarFederaciones(federaciones, posiciones_federacion){
        for (let i = 0; i < federaciones.length; i++) {
            let posicion=posiciones_federacion[i];
            fakeFederaciones.federaciones[posicion]=federaciones[i];
        }       
    }

    actualizarFederacion(federaciones, posicion){
        fakeFederaciones.federaciones[posicion]=federaciones;
    }
}

module.exports={federacionesDAO}