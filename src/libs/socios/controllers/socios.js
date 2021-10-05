const fakeSocios = require('../../../database/fake-db/socios');
const {Listas} = require('../../utils/listas')
const _listas = new Listas;
const {SociosDAO} = require('../DAO/socios');
const _sociosDAO = new SociosDAO;


class SociosController{

    validarSocios(socio){
        if (!socio) {
            throw 'Ingrese el socio';
        }else if(!socio.id_socios){
            throw 'Ingrese el id del socio';
        }else if(!socio.nombre){
            throw 'Ingrese el nombre del socio';
        }else if(!socio.cedulas){
            throw 'Ingrese la cedula del socio';
        }else if(!socio.finca){
            throw 'Ingrese el nombre de la finca del socio';
        }else if(!socio.detalles){
            throw 'Ingrese informacion adicional del socio';
        }else if(!socio.telefono){
            throw 'Ingrese el telefono de contacto del socio';
        }
    }

    async consultarSocios(){
        return _sociosDAO.consultarSocios();
    }

    async consultarSocio(id_socios){
        let posicion = _listas.posicionEnLista(fakeSocios.socios, id_socios);
        return _sociosDAO.consultarSocio(posicion);
    }

    async crearSocios(socios){
        _listas.enLista(fakeSocios.socios,socios)
        _sociosDAO.crearSocios(socios);
    }
    
    async actualizarSocios(socios, lista_ids){
        _listas.mismoId(socios, lista_ids);
        let posiciones_socios = _listas.posicionesEnLista(fakeSocios.socios, lista_ids);
        _sociosDAO.actualizarPedidos(pedidos, posiciones_socios)
    }

    async actualizarSocio(socio, id_socio){
        _listas.mismoId([socio], [id_socio]);
        let posicion = _listas.posicionEnLista(fakeSocios.socios, socio.id);
        _sociosDAO.actualizarSocio(socio, posicion);
    }
}

module.exports={SociosController}