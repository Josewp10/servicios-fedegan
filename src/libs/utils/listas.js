class Listas{
    posicionEnLista(lista, id){
        for (let i = 0; i <lista.length; i++) {
            
            if (lista[i].id==id) {
                return i;
            }
        }
    }

    posicionesEnLista(lista, lista_ids){
        let posicion=[];

        for (let i = 0; i < lista_ids.length; i++) {
            for (let j = 0; j < lista.length; j++) {
            
                if (lista_ids[i]==lista[j].id) {
                    posicion.push(j);
                }
            }
        }

        return posicion;
    }

    enLista(lista, id){
        for (let i = 0; i <lista.length; i++) {
            if (lista[i].id==id) {
                throw 'El elemento ya existe';
            }
        }
    }

    mismoId(lista_pedidos, lista_ids){
        let coincidencias=0;
        for (let i = 0; i < lista_ids.length; i++) {
            for (let j = 0; j < lista_pedidos.length; j++) {
                
                if (lista_ids[i]==lista_pedidos[j].id) {
                    coincidencias++;
                }
            }
        }
        
        if (coincidencias!=lista_pedidos.length){
            throw 'El id del objeto no coincide con el enviado'}
    }

}
module.exports={Listas};