import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";


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





 



export const Item = ({item, onDeleteItem,onToggleItem}) =>{
  return (
  <li>
    <input type="checkbox"  value={item.packed} onChange={()=>onToggleItem(item.id)}/>
    <span style={item.packed ? {textDecoration:
       "line-through"} : {}}>
        {item.quantity} {item.description}
    </span>
    <button onClick={() =>onDeleteItem(item.id)}>❌</button>
  </li>
  )


}






export const Stats = ({items}) => {
  if(!items.length) return <p className="stats"><em>Start adding some items to your packing list</em></p>
  const numItems = items.length
  const numPacked = items.filter(item =>item.packed).length
  const percentage = Math.round(numPacked / numItems * 100)
  return (
   <footer className='stats'>
    <em>
      {percentage === 100 ? "you got everything ready to go " : `you have ${numItems} items on your list and you have already packed ${numPacked} (${percentage}%)`}
    You have {numItems} items on your list and you have already packed {numPacked} ({percentage}%)
    </em>
   </footer>
  )
}







