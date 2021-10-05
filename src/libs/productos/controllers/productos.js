const fakeProductos = require('../../../database/fake-db/productos');
const {Listas} = require('../../utils/listas')
const _listas = new Listas;
const {ProductosDAO} = require('../DAO/productos');
const _productosDAO = new ProductosDAO;


class ProductosController{

    validarProductos(producto){
        if (!producto) {
            throw 'Ingrese el producto';
        }else if(!producto.id_producto){
            throw 'Ingrese el id del producto';
        }else if(!producto.nombre){
            throw 'Ingrese el nombre del producto';
        }else if(!producto.descripcion){
            throw 'Ingrese la descipcion del producto'
        }else if(!producto.precio){
            throw 'Ingrese el precio del producto'
        }else if(!producto.unidades){
            throw 'Ingrese el numero de unidades del producto'
        }
    }

    async consultarProductos(){
        return _productosDAO.consultarProductos();
    }

    async consultarProducto(id_producto){
        let posicion = _listas.posicionEnLista(fakeProductos.productos, id_producto);
        return _productosDAO.consultarProducto(posicion);
    }

    async crearProductos(productos){
        _listas.enLista(fakeProductos.productos,productos)
        _productosDAO.crearProductos(productos);
    }

    async eliminarProductos(lista_id_producto){
        let posiciones_productos = _listas.posicionesEnLista(fakeProductos.productos, lista_id_producto);
        _productosDAO.eliminarProductos(posiciones_productos);
    }

    async eliminarProducto(id_producto){
        let posicion = _listas.posicionEnLista(fakeProductos.productos, id_producto);
        _productosDAO.eliminarProducto(posicion);
    }
    
    async actualizarProductos(productos, lista_ids){
        _listas.mismoId(productos, lista_ids);
        let posiciones_productos = _listas.posicionesEnLista(fakeProductos.productos, lista_ids);
        _productosDAO.actualizarProductos(productos, posiciones_productos)
    }

    async actualizarProducto(producto, id_producto){
        _listas.mismoId([producto], [id_producto]);
        let posicion = _listas.posicionEnLista(fakeProductos.productos, producto.id);
        _productosDAO.actualizarProducto(producto, posicion);
    }
}

module.exports={ProductosController}