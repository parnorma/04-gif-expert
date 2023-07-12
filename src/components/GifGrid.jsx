import PropTypes from 'prop-types';
import { GifItem } from "./GifItem";


import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({ category }) => { 
  
  const {images, isLoading} = useFetchGifs(category);
  //console.log({images,isLoading});

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && ( <h2>Cargando .....</h2>)
        }
       
        <div className="card-grid">
          {images.map(img =>( 
              <GifItem 
                key={img.id} 
                //  title={img.title} 
                //  url={img.url}
                {...img}// asi envio todos las propiedades del elemento sin necesidad de ponerlo 1 a 1
              />           
             
            ))
          }          
        </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}