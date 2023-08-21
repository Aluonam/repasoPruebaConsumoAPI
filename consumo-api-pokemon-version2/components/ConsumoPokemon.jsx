import React, { useState } from 'react'

const ConsumoPokemon = () => {


    const llamadaAPI = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon/ditto";
        const llamada = await fetch(url);
        const datos = await llamada.json();
        console.log(datos);
    }

    

  return (
    <>
    <div>Consumo API Pokemon</div>
    <button onClick={()=>{llamadaAPI()}}>Clic</button>
    </>
  )
}

export default ConsumoPokemon