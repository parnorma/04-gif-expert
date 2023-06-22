import { useState } from "react";
import { AddCategory, GifGrid } from './components/index';
//import { AddCategory } from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
   
  const [categories, setCategories] = useState(['Dragon Ball']);
  
  const onAddCategory = (newCategory) =>{    
    if( categories.includes(newCategory)) return;
      //categories.push(newCategory); //no usar porque no maneja el estado
      setCategories([...categories,newCategory]);
  };

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
           onNewCategory = {(event) => onAddCategory(event)} // aca le mandamos el evento al hijo
         />
        { categories.map((category) =>(
            <GifGrid key={category} category={category} />
          ))  
         }
    </>
  )
}
