const fakeCatalogo = require('../../../database/fake-db/catalogo');
const {Listas} = require('../../utils/listas')
const _listas = new Listas;
const {CatalogoDAO} = require('../DAO/catalogo');
const _catalogoDAO = new CatalogoDAO;


class CatalogoController{

    validarCatalogo(catalogo){
        if (!catalogo) {
            throw 'Ingrese el catalogo';
        }else if(!catalogo.id_catalogo){
            throw 'Ingrese el id del catalogo';
        }else if(!catalogo.productos){
            throw 'Ingrese los productos del catalogo';
        }else if(!catalogo.disponibilidad){
            throw 'Ingrese la disponibilidad';
        }else if(!catalogo.descripcion){
            throw 'Ingrese la descripcion';
        }
    }

    async consultarCatalogos(){
        return _catalogoDAO.consultarCatalogos();
    }

    async consultarCatalogo(id_catalogo){
        let posicion = _listas.posicionEnLista(fakeCatalogo.catalogo, id_catalogo);
        return _catalogoDAO.consultarCatalogo(posicion);
    }

    async crearCatalogos(catalogo){
        _listas.enLista(fakeCatalogo.catalogo,catalogo) 
        _catalogoDAO.crearCatalogos(catalogo);
    }

    async eliminarCatalogos(lista_id_catalogo){
        let posiciones_catalogo = _listas.posicionesEnLista(fakeCatalogo.catalogo, lista_id_catalogo);
        _catalogoDAO.eliminarCatalogos(posiciones_catalogo);
    }

    async eliminarCatalogo(id_catalogo){
        let posicion = _listas.posicionEnLista(fakeCatalogo.catalogo, id_catalogo);
        _catalogoDAO.eliminarCatalogo(posicion);
    }
    
    async actualizarCatalogos(catalogo, lista_ids){
        _listas.mismoId(catalogo, lista_ids);
        let posiciones_catalogo = _listas.posicionesEnLista(fakeCatalogo.catalogo, lista_ids);
        _catalogoDAO.actualizarCatalogos(catalogo, posiciones_catalogo)
    }

    async actualizarCatalogo(catalogo, id_catalogo){
        _listas.mismoId([catalogo], [id_catalogo]);
        let posicion = _listas.posicionEnLista(fakeCatalogo.catalogo, catalogo.id);
        _catalogoDAO.actualizarCatalogo(catalogo, posicion);
    }
}

module.exports={CatalogoController}