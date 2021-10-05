const fakeFormularios = require('../../../database/fake-db/formularios');


class FormulariosDAO{

    consultarFormularios(){
        return fakeFormularios.formularios;
    }

    consultarFormulario(posicion_formulario){
        return fakeFormularios.formularios[posicion_formulario];
    }

    crearFormularios(formularios){
        for (let i = 0; i < formularios.length; i++) {
            fakeFormularios.formularios.push(formularios[i]);
        }  
    }

    actualizarFormularios(formulario, posiciones_formulario){
        for (let i = 0; i < catalogo.length; i++) {
            let posicion=posiciones_formulario[i];
            fakeFormularios.formularios[posicion]=formulario[i];
        }       
    }

    actualizarFormulario(formulario, posicion){
        fakeFormularios.formularios[posicion]=formulario;
    }
}

module.exports={FormulariosDAO}