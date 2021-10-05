const fakeProductos = require('../../../database/fake-db/productos');


class ProductosDAO{

    consultarProductos(){
        return fakeProductos.productos;
    }

    consultarProducto(posicion_producto){
        return fakeProductos.productos[posicion_producto];
    }

    crearProductos(productos){
        for (let i = 0; i < productos.length; i++) {
            fakeProductos.productos.push(productos[i]);
        }   
    }

    eliminarProductos(posiciones_productos){
        for (let i = 0; i < posiciones_productos.length; i++) {
            fakeProductos.productos.splice(posiciones_productos[i],1);
            if (i==0) {
                fakeProductos.productos.splice(posiciones_productos[i],1);
            }else{
                fakeProductos.productos.splice(posiciones_productos[i]-1,1);
            }
        }        

    }

    eliminarProducto(posicion){
        fakeProductos.productos.splice(posicion,1);
    }
    
    actualizarProductos(productos, posiciones_productos){
        for (let i = 0; i < productos.length; i++) {
            let posicion=posiciones_productos[i];
            fakeProductos.productos[posicion]=productos[i];
        }       
    }

    actualizarProducto(producto, posicion){
        fakeProductos.productos[posicion]=producto;
    }
}

module.exports={ProductosDAO}