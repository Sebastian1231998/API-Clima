import React from 'react';

const Clima = ({resultado}) => {


    let Kelvin = 273.15; 

    let {name , main} = resultado;

    if(!name) return null;

    return ( 
           
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    {parseFloat( main.temp - Kelvin , 10).toFixed(2) } <span>&#x2103;</span>
                </p>

                <p> Temperatura Máxima: 
                    {parseFloat( main.temp_max - Kelvin , 10).toFixed(2) }<span>&#x2103;</span>
                </p>

                <p> Temperatura Minima:
                    {parseFloat( main.temp_min - Kelvin , 10).toFixed(2) }<span>&#x2103;</span>
                </p>

           </div>
        </div>


     );
}
 
export default Clima;