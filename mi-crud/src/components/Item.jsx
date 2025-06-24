import React from "react";

function Item({ item, deleteItem, editItem }) {
  const { nombre, asignatura, promedio } = item.value;

  return (
    <div className="evaluacion-card">
      <div className="contenido-evaluacion">
        <div className="info-evaluacion">
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Asignatura:</strong> {asignatura}</p>
          <p><strong>Promedio:</strong> {promedio}</p>
        </div>
        <div className="acciones">
          <button onClick={() => editItem(item)}>Editar</button>
          <button onClick={() => deleteItem(item.id)}>Eliminar</button>
        </div>
      </div>

      {(() => {
        const nota = parseFloat(promedio);

        if (nota === 7) {
          return <span className="etiqueta destacado">Destacado</span>;
        } else if (nota >= 6 && nota < 7) {
          return <span className="etiqueta muy-bien">Muy bien</span>;
        } else if (nota >= 4 && nota < 6) {
          return <span className="etiqueta regular">Regular</span>;
        } else if (nota >= 0 && nota < 4) {
          return <span className="etiqueta reprobado">Reprobado</span>;
        } else {
          return null;
        }
      })()}
    </div>
  );
}

export default Item;

