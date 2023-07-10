import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

  const onInputChange = (event)=>{
    
    setInputValue(event.target.value);
  };

  const onSubmitEvent = (event)=>{
   // console.log('------------------>Hola mundo desde onSubmit');
    event.preventDefault();
    if (inputValue.trim().length<=1) return;     
    //setCategories((categories) => [...categories,inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={(event)=>onSubmitEvent(event)} aria-label="form">
        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={(event) => onInputChange(event)}
        />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory : PropTypes.func.isRequired
}