import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifApp = () => {

    const [categories, setCategories] = useState([]);
  
const onAddCategory = ( newCategory) =>{

    if(categories.includes(newCategory)) return;

    setCategories(items => [newCategory,...items]);
}  
  
  
    return (
   <>
   <h1>Busca tu Gifs</h1>

   <AddCategory onNewCategory ={onAddCategory} />
   
   
    {
        categories.map(category => (
            <GifGrid
             key={category} 
             category={category}/>
        ))
    }
  


   </>

  )
}
