import {  useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images,setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const getImages = async()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    // cuando el counter cambie quiero cambiar 
    useEffect(()=>{ 
      //getGifs(category);
      getImages();
    },[]);// se usa para la primera vez que crea el componente

   return{
    images:images,
    isLoading: isLoading
   }
}
