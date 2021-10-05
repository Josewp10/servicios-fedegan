const fakeSocios = require('../../../database/fake-db/socios');


class SociosDAO{

    consultarSocios(){
        return fakeSocios.socios;
    }

    consultarSocio(posicion_socio){
        return fakeSocios.socios[posicion_socio];
    }

    crearSocios(socios){
        for (let i = 0; i < socios.length; i++) {
            fakeSocios.socios.push(socios[i]);
        }   
    }

    actualizarSocios(socios, posiciones_socios){
        for (let i = 0; i < socios.length; i++) {
            let posicion=posiciones_socios[i];
            fakeSocios.socios[posicion]=socios[i];
        }       
    }

    actualizarSocio(socio, posicion){
        fakeSocios.socios[posicion]=socio;
    }
}

module.exports={SociosDAO}