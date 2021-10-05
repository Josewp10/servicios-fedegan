const fakeCatalogo = require('../../../database/fake-db/catalogo');


class CatalogoDAO{

    consultarCatalogos(){
        return fakeCatalogo.catalogo;
    }

    consultarCatalogo(posicion_catalogo){
        return fakeCatalogo.catalogo[posicion_catalogo];
    }

    crearCatalogos(catalogos){
        for (let i = 0; i < catalogos.length; i++) {
            fakeCatalogo.catalogo.push(catalogos[i]);
        }   
    }

    eliminarCatalogos(posiciones_catalogo){
        for (let i = 0; i <= posiciones_catalogo.length; i++) {
            fakeCatalogo.catalogo.splice(posiciones_catalogo[i],1);
        }        
    }

    eliminarCatalogo(posicion){
        fakeCatalogo.catalogo.splice(posicion,1);
    }
    
    actualizarCatalogos(catalogo, posiciones_catalogo){
        for (let i = 0; i < catalogo.length; i++) {
            let posicion=posiciones_catalogo[i];
            fakeCatalogo.catalogo[posicion]=catalogo[i];
        }       
    }

    actualizarCatalogo(catalogo, posicion){
        fakeCatalogo.catalogo[posicion]=catalogo;
    }
}

module.exports={CatalogoDAO}