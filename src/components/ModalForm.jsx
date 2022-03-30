// NPM packages
import { useState } from "react";

export default function ModalForm({ listState, modalState }) {
  const [list, setList] = listState;
  const [showModal, setShowModal] = modalState;

  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Methods
  function onSubmit() {
    const newItem = {
      id: list.length,
      name: name,
      price: price,
      completed: false,
      imageURL: "",
    };

    setList([...list, newItem]);
    resetForm();
    setShowModal(null);
  }

  function resetForm() {
    setName("");
    setPrice("");
  }

  // Safeguard
  if (!showModal) return null;

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          autoFocus
          placeholder="Ex: Chair"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          placeholder="Ex: 500"
          required
          min={1}
          max={9000}
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <button>Submit</button>
      <button onClick={resetForm}>Cancel</button>
    </form>
  );
}
