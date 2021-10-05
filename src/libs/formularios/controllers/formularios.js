const fakeFormularios = require('../../../database/fake-db/formularios');
const {Listas} = require('../../utils/listas')
const _listas = new Listas;
const {FormulariosDAO} = require('../DAO/formularios.js');
const _formulariosDAO = new FormulariosDAO;


class FormulariosController{

    validarFormularios(formulario){
        if (!formulario) {
            throw 'Ingrese el formulario';
        }else if(!formulario.id_formulario){
            throw 'Ingrese el id de formulario';
        }else if(!formulario.tipo){
            throw 'Ingrese el tipo de formulario';
        }else if(!formulario.campo){
            throw 'Ingrese nombre de campo'
        }else if(!formulario.botones){
            throw 'Ingrese nombre del boton'
        }
    }

    async consultarFormularios(){
        return _formulariosDAO.consultarFormularios();
    }

    async consultarFormulario(id_formulario){
        let posicion = _listas.posicionEnLista(fakeFormularios.formularios, id_formulario);
        return _formulariosDAO.consultarFormulario(posicion);
    }

    async crearFormularios(formularios){
        _listas.enLista(fakeFormularios.formularios,formularios)
        _formulariosDAO.crearFormularios(formularios);
    }

    async actualizarFormularios(formularios, lista_ids){
        _listas.mismoId(formularios, lista_ids);
        let posiciones_formularios = _listas.posicionesEnLista(fakeFormularios.formularios, lista_ids);
        _formulariosDAO.actualizarFormularios(formularios, posiciones_formularios)
    }

    async actualizarFormulario(formulario, id_formulario){
        _listas.mismoId([formulario], [id_formulario]);
        let posicion = _listas.posicionEnLista(fakeFormularios.formularios, formulario.id);
        _formulariosDAO.actualizarFormulario(formulario, posicion);
    }
}

module.exports={FormulariosController}