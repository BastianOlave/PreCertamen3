import React, { useState, useEffect } from 'react';

// Componente Form que maneja la creación y edición de evaluaciones
// Recibe las propiedades addOrUpdateItem y itemToEdit
function Form({ addOrUpdateItem, itemToEdit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    asignatura: '',
    promedio: ''
  });

  useEffect(() => {
    if (itemToEdit) {
      setFormData(itemToEdit.value);
    } else {
      setFormData({
        nombre: '',
        asignatura: '',
        promedio: ''
      });
    }
  }, [itemToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const promedioNum = parseFloat(formData.promedio);
    if (
      formData.nombre.trim() &&
      formData.asignatura.trim() &&
      !isNaN(promedioNum) &&
      promedioNum >= 1 &&
      promedioNum <= 7
    ) {
      addOrUpdateItem(formData);
      setFormData({ nombre: '', asignatura: '', promedio: '' });
    } else {
      alert("Por favor, completa todos los campos y asegúrate de que el promedio esté entre 1 y 7.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{itemToEdit ? 'Editar evaluación' : 'Agregar nueva evaluación'}</h2>  
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del alumno"
        value={formData.nombre}
        onChange={handleChange}
      />
      <input
        type="text"
        name="asignatura"
        placeholder="Asignatura"
        value={formData.asignatura}
        onChange={handleChange}
      />
      <input
        type="number"
        step="0.1"
        name="promedio"
        placeholder="Promedio (1.0 - 7.0)"
        value={formData.promedio}
        onChange={handleChange}
        min="1"
        max="7"
      />
      <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}

export default Form;
