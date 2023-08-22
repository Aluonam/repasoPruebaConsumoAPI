
```javascript
import React, { useState } from 'react'

const ConsumoPokemon = () => {
    //--------- useState guarda datos que se reciben de la API, por defecto vacio para hacer lógica de cuando haya algo muestre las imágenes.
    const [datosAPI, setDatosAPI] = useState('')
    //--------- useState que guarda lo que escribe el usuario.
    const [datosInput, setDatosInput] = useState('')

    const llamadaAPI = async (nombrePokemon) => {
        try{
//--------------------la url debe usar comillas laterales  `  ` 
            const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
            const llamada = await fetch(url);
            const datos = await llamada.json();
            // setDatosAPI(datos.sprites._default);
            // --------------en la variable se especifican que se cojan dentro del objeto la parte frontal y trasera
            setDatosAPI({
              cara: datos.sprites.front_default,
              culo: datos.sprites.back_default
            });
        } catch(error){
        console.log("Error detectado",error)
        }
    }

  //------Función que especifica que incluya la impresion en pantalla de una imagen con el src frontal y otra para el trasero
    const imagenes = <>
                    <img src={datosAPI.cara}/>
                    <img src={datosAPI.culo}/>
                    </>

    

  return (
    <>
    {datosAPI !== '' && imagenes}
    <div>Introduce el nombre de un pokemon</div>
    <input onChange={(e)=>{setDatosInput(e.target.value)}}></input>
    <button onClick={()=>{llamadaAPI(datosInput)}}>Clic</button>
    </>
  )
}

export default ConsumoPokemon
```
