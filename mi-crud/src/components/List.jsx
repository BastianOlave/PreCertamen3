import React from "react";
import Item from "./Item";

// Componente List que muestra la lista de evaluaciones
// Recibe las propiedades items, deleteItem y editItem
function List({ items, deleteItem, editItem }) {
  return (
    <div className="evaluaciones-box">
      <h2>Evaluaciones Guardadas</h2>
      {items.length === 0 ? (
        <p className="mensaje-vacio">No hay evaluaciones guardadas.</p>
      ) : (
        <div className="lista">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
