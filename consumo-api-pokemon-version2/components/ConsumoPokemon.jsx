import React, { useState } from 'react'

const ConsumoPokemon = () => {

    const [datosAPI, setDatosAPI] = useState('')
    const [datosInput, setDatosInput] = useState('')

    const llamadaAPI = async (nombrePokemon) => {
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
            const llamada = await fetch(url);
            const datos = await llamada.json();
            // setDatosAPI(datos.sprites._default);
            setDatosAPI({
              cara: datos.sprites.front_default,
              culo: datos.sprites.back_default
            });
        } catch(error){
        console.log("Error detectado",error)
        }
    }
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