import React, { useState } from 'react'

const ConsumoPokemon = () => {

    const [datosAPI, setDatosAPI] = useState('')
    const [datosInput, setDatosInput] = useState('')

    const llamadaAPI = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon/ditto";
        const llamada = await fetch(url);
        const datos = await llamada.json();
        setDatosAPI(datos);
    }

    

  return (
    <>
    <div>Introduce el nombre de un pokemon</div>
    <input onChange={()=>{}}></input>
    <button onClick={()=>{llamadaAPI()}}>Clic</button>
    </>
  )
}

export default ConsumoPokemon