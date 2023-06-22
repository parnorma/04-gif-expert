import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

  const onInputChange = (event)=>{
    
    setInputValue(event.target.value);
  };

  const onSubmitEvent = (event)=>{
    event.preventDefault();
    if (inputValue.trim().length<=1) return;     
    //setCategories((categories) => [...categories,inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={(event)=>onSubmitEvent(event)}>
        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={(event) => onInputChange(event)}
        />
    </form>
  )
}
