import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

// Esta es la función principal del componente App
// Aquí se definen los estados necesarios para el CRUD
function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false); // Nuevo estado agregado

  // Cargar evaluaciones desde localStorage al iniciar la app
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
    setIsInitialized(true); // Indica que ya se cargó desde localStorage
  }, []);

  // Guardar en localStorage solo si ya se cargó correctamente
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, value } : item));
      setItemToEdit(null);
    } else {
      setItems([
        ...items,
        { id: Date.now(), value }
      ]);
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="App-header">
      <h1 className="titulo">Evaluación de Alumnos</h1>
      <div className="App">
        <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      </div>
      <div className="App2">
        <List items={items} deleteItem={deleteItem} editItem={editItem} />
      </div>
    </div>
  );
}

export default App;
