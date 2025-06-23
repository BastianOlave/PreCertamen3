import React, { useState, useEffect } from 'react';


//Esta funcion es el componente Form que maneja la entrada de datos del usuario
//Permite agregar o actualizar un item en la lista
function Form({addOrUpdateItem, itemToEdit}){
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (itemToEdit) {
            setInputValue(itemToEdit.value);
        } else {
            setInputValue('');
        }
    }, [itemToEdit]);
    const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()){
        addOrUpdateItem(inputValue);
        setInputValue('');
    }
};
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
}

export default Form;