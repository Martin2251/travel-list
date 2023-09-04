import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";


export default function App() {
  const [items,setItems] = useState([]);
 // ADD NEW ITEMS TO ITEMS ARRAY FUNCTION 
 function handleAddItems(item){
  // to update our items array use setItems
  // spread it and then add the item we want to add here
  setItems(items=>[...items, item])

}

function handleDeleteItem(id){
  // pass in the id because every item has an id
  setItems(items => items.filter(item => item.id !== id))
}

function handleToggleItem(id){
  setItems(items =>items.map(item=>item.id === id ? {...item,packed:!item.packed}:item))
}


function handleClearList(){
  const confirmed = window.confirm("are you sure you want to delete all items")

  if(confirmed)setItems([]);
}
 return(
  <div className='app'>
    <Logo/>
    <Form onAddItems={handleAddItems} />
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
    <Stats items={items} />


  </div>
 )
 
}





 




