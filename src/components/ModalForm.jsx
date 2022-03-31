// NPM packages
import { useState } from "react";

// Project files
import InputField from "./InputField";
import form from "../data/form.json";

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
    <form onSubmit={onSubmit} data-testid="form">
      <InputField state={[name, setName]} />
      <InputField setup={form.price} />
      <button>Submit</button>
      <button onClick={resetForm}>Cancel</button>
    </form>
  );
}
