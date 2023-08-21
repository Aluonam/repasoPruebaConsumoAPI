import React from 'react'

const ConsumoPokemon = () => {


    const llamadaAPI = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon/ditto";
        const llamada = await fetch(url);
        const datos = await llamada.json();
        console.log(datos);
    }

    llamadaAPI()

  return (
    <div>ConsumoPokemon</div>
  )
}

export default ConsumoPokemon