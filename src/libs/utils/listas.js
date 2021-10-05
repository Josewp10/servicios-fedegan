class Listas{
    posicionEnLista(lista, id){
        for (let i = 0; i <lista.length; i++) {
            if (lista[i].id==id) {
                return i;
            }
        }
        throw 'Objeto no encontrado'
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
        if (posicion==0) {
            throw 'Objeto no encontrado'
        }
        return posicion;
    }

    enLista(lista, lista_ids){
        for (let i = 0; i <lista_ids.length; i++) {
            for (let j = 0; j <lista.length; j++) {
                if (lista_ids[i].id==lista[j].id) {
                    throw `El elemento ${lista_ids[i].id} ya existe`;
                }
            }            
        }
        
    }

    mismoId(lista, lista_ids){
        let coincidencias=0;
        for (let i = 0; i <= lista_ids.length; i++) {
            for (let j = 0; j < lista.length; j++) {
                
                if (lista_ids[i]==lista[j].id) {
                    coincidencias++;
                }
            }
        }

        if (coincidencias!=lista.length && lista.length==1){
            throw 'El id del objeto no coincide con el enviado'
        }else if (coincidencias!=lista.length && lista.length>1) {
            throw 'El id de los objetos no coincide con los enviados enviado'
        } 
    }

}
module.exports={Listas};