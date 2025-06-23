import React from "react";
import Item from "./Item";

// Esta función es el componente List que representa una lista de items
// Permite mostrar, editar o eliminar items de la lista
function List({ items, deleteItem, editItem }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </ul>
  );
}

export default List;