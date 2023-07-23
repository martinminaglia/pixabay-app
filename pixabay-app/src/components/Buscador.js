import React, { Component} from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();//unA FUNCIION DE REACT QWUER PERMITE LEER EL INPPUT
    
    obtenerDatos = (event) => {
        event.preventDefault();
        //tomamos el valor del input
        const termino = this.busquedaRef.current.value;
        //lo enviamos al componente principal
        this.props.datosBusqueda(termino);
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className='row'>
                    <div className='form-group col-md-8'>
                        <input ref={this.busquedaRef} type='text' className='form-control form-control-lg' placeholder='Busca tu Imágen.
                        Ejemplo: Fútbol'/>
                    </div>
                    <div className='form-group col-md-4'>
                        <button type='submit' className='btn btn-lg btn-danger btn-block' value='Buscar...'>Buscar...</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;  //exportando el componente para poder usarlo en o
//minuto 16:49 video REact 16- crea tu primera aplicacion web en 1 hora (https://youtu.be/hScR513gvNo)