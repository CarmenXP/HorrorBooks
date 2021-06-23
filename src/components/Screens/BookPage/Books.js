import {useState} from 'react';
import data from "../../../data";

export default function Books() {
    const results = data.horrorBooks
    const[api, setApi] =  useState(results)
    
    

    return(
        <div>
            <h3>Lectura del miedo</h3>
            {api.map((book)=><p>{book.author}</p>)}
            
        </div>

    )
        
    
}
