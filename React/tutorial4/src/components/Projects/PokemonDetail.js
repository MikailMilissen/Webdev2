import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'



const api= 'https://pokeapi.co/api/v2/pokemon/'

export default function Detail() {

    useEffect(() => {
        fetchPokemon();
    }, [])
    
    const [item, setItem] = useState({})
    
    const fetchPokemon = async () => {
        
    }

    return (
    <div>
      <h1>Item</h1>
    </div>
    )
}
