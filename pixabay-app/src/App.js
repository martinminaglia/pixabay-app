import React,{Component} from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component{
  state={
    termino:'',
    imagenes: [],
    pagina: ''
  }
  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }
  paginaAnterior = () =>{
      //leer el state de la pagina actual
      let pagina = this.state.pagina;
      //Si la pagiona es 1, ya no ir hacia atras
      if(pagina===1)return null;
      //resta 1 a la pagina actual
      pagina -=1;
      //agregar el cambio al state
      this.setState({
        pagina
      } ,()=>{
        this.consultarApi();
        this.scroll();
      });
  }
  paginaSiguiente =() =>{
    //leer el state de la pagina actual
    let pagina = this.state.pagina;
    
    //sumar 1 a la pagina actual
    pagina +=1;
    //agregar el cambio al state
    this.setState({
      pagina
    }, ()=>{
      this.consultarApi();
      this.scroll();
    });
  }
  consultarApi = () =>{
    const pagina=this.state.pagina;
    const termino= this.state.termino;
    const url = `https://pixabay.com/api/?key=38321857-ac3a4e47fc1efd2f6f1688be5&q=${termino}&per_page=30&page=${pagina}`;
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes:resultado.hits}) )
  }
    datosBusqueda = (termino) => {
      this.setState({
        termino: termino,
        pagina: 1
      }, ()=>{
        this.consultarApi();
      });
    }
    render(){
       return (
            <div className="app container">
                <div className="jumbotron">
                    <p className="lead text-center">Buscador de Imágenes</p>
                    <Buscador datosBusqueda={this.datosBusqueda} />
                </div>
                <div className="row justify-content-center">
                <Resultado imagenes = {this.state.imagenes} paginaAnterior={this.paginaAnterior} paginaSiguiente={this.paginaSiguiente}/>
                </div>
            </div>
        );
    }
}

export default App;
//minuto 32:00 video REact 16- crea tu primera aplicacion web en 1 hora (https://youtu.be/hScR513gvNo)