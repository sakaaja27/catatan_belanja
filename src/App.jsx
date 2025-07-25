import { useState } from "react";
import Header from "./components/headers";
import Form from "./components/forms";
import Grocery from "./components/grocery";
import Footer from "./components/footer";

// import { useState } from 'react'
const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];
export default function App() {
  const [items, setItems] = useState(groceryItems)

  function handleAddItem(item) {
    setItems([...items, item])
  }

  function handleDeleteItem(id){
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? {...item,checked: !item.checked} : item))
  }

  function handleClearItems() {
    setItems([])
  }
  return (
    <>
      <div className="app">
        <Header />
        <Form onAddItem={handleAddItem} />
        <Grocery items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
        <Footer items = {items}/>
      </div>
    </>
  );
}







