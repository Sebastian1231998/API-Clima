import React, {useState} from "react";

const Formulario = ({datosClima,guardarDatosClima,cambiaConsultar}) => {


    const [error, actualizarError] = useState(false); 


    const hanlderChange = (e)=>{

        guardarDatosClima({
            ...datosClima,
            [e.target.name]: e.target.value
        })

    }

    let {cuidad, pais} = datosClima

    const handlerSubmit = (e)=>{
       e.preventDefault(); 


       //validar 
       if(cuidad.trim() === '' || pais.trim() === ''){

        actualizarError(true);
        return; 

       }

       actualizarError(false);

       cambiaConsultar(true);
    }

  return (
    <form onSubmit={handlerSubmit}>

      {error ? <div className="red darken-2 error">Todos Los Campos Son Obligatorios</div>: null}
      <div className="input-field col s12">
        <input type="text" onChange={hanlderChange} name="cuidad" id="cuidad" />

        <label htmlFor="cuidad">Cuidad:</label>
      </div>

      <div className="input-field col s12">
        <select name="pais" onChange={hanlderChange} id="pais">
          <option value="">--Seleccione un país--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Pais:</label>
      </div>

      <div className="input-field col s12">

          <input
           type="submit"
           className="waves-effect waves-ligth btn-large btn-block yellow accent-4"
           value="Buscar Clima"
           />
      </div>
    </form>
  );
};

export default Formulario;
