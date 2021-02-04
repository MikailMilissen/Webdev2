import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'



const api= 'https://pokeapi.co/api/v2/pokemon/'

export default function Pokemon() {

    useEffect(() => {
        fetchPokemons();
    }, [])
    
    const [items, setItems] = useState([])
    
    const fetchPokemons = async () => {
        const data= await fetch(api)
            console.log(data)
        const items = await data.json()
            console.log(items.results)
            
        setItems(items.results);
    }

    return (
    <div>
      <h1>This is my Pokemon Application</h1>
      
      <button >Press here</button>
       {items.map(item =>(
        <ul>
           <li key={item.url} className='pokemons'>
            <Link to={`${item.url}`}>
               {item.name}
            </Link>
            </li>
        </ul>
           
       ))}
       
    </div>
    )
}
