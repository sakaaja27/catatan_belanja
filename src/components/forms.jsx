import { useState } from "react";
export default function Form({onAddItem}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    const newItem = {name, quantity, checked:false, id:Date.now()}
    onAddItem(newItem)
    if (!name){
      alert('setidaknya ada barang yang harus diisi')
      return;
    } 
    setName('')
    setQuantity(1)
    e.preventDefault();
  }
  const setquantity = [...Array(20)].map((x, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>{setquantity}</select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}