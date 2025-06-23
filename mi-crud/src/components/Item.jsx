import React from "react";

// Esta función es el componente Item que representa un elemento individual en la lista
// Permite editar o eliminar un item de la lista
function Item({ item, deleteItem, editItem }) {
    return (
        <li>
        {item.value}
        <button onClick={() => editItem(item)}>Editar</button>
        <button onClick={() => deleteItem(item.id)}>Eliminar</button>
        </li>
    );
}

export default Item;