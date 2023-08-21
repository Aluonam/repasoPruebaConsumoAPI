import React, { useState } from 'react'

const ConsumoPokemon = () => {

    const [datosAPI, setDatosAPI] = useState('')
    const [datosInput, setDatosInput] = useState('')

    const llamadaAPI = async () => {
        try{
            const url = "https://pokeapi.co/api/v2/pokemon/ditto";
            const llamada = await fetch(url);
            const datos = await llamada.json();
            setDatosAPI(datos.sprites.back_default);
        } catch(error){
        console.log("Error detectado",error)
        }
    }

    

  return (
    <>
    {datosAPI !== '' && <img src={datosAPI}/>}
    <div>Introduce el nombre de un pokemon</div>
    <input onChange={(e)=>{setDatosInput(e.target.value)}}></input>
    <button onClick={()=>{llamadaAPI()}}>Clic</button>
    </>
  )
}

export default ConsumoPokemon