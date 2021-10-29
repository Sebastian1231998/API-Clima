import React , {useState,Fragment,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
function App() {

  
  const [datosClima, guardarDatosClima] = useState({
    cuidad:'',
    pais:''
 });

 const [resultado, guardarResultado] = useState({});

 const [consultar,cambiaConsultar] = useState(false);

 let {cuidad , pais } = datosClima; 


 useEffect(() => {
  

  if(consultar){
    
    const consultarAPI = async ()=>{

      const APIKey = 'da32c73beadf5a0511a268f046f88309'; 
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cuidad},${pais}&appid=${APIKey}`
      
      let respuesta = await fetch(url);
      let resultado = await respuesta.json();

      guardarResultado(resultado);

      cambiaConsultar(false);
     }

     consultarAPI();

  }
     
 }, [consultar])


  return (
   
    <Fragment>

          <Header 

            titulo = 'Clima React APP'
          />

          <div className="contenedor-form">           
               <div className="container">
                  <div className="row">
                     <div className="col m6 s12">
                        <Formulario 

                          datosClima={datosClima}
                          guardarDatosClima={guardarDatosClima}
                          cambiaConsultar={cambiaConsultar}

                        />
                     </div>
                     <div className="col m6 s12">
                       <Clima 

                         resultado = {resultado}
                       />
                     </div>

                  </div>
               </div>
          </div>

    </Fragment>
     
  );
}

export default App;
