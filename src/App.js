import { useState } from "react";



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
 return(
  <div className='app'>
    <Logo/>
    <Form onAddItems={handleAddItems} />
    <PackingList items={items} onDeleteItem={handleDeleteItem}/>
    <Stats  />

  </div>
 )
 
}



 export  const Logo = () => {
  return (
    <h1>🏝️ Far Away 🧳</h1>
  )
}


 export const Form = ({onAddItems}) => {

  const [description, setDescription] = useState("");
  const [quantity,setQuantity] = useState(1);

 

  function handleSubmit (e) {
    e.preventDefault();

    if(!description) return;

    const newItem ={description,quantity,packed:false, id:Date.now()}
    console.log(newItem)

    // with new item we have just created 
    onAddItems(newItem)

    setDescription("");
    setQuantity(1)

  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3> what do you need for your trip?</h3>
      <select value={quantity} onChange={(e) =>setQuantity(Number(e.target.value))}>
       {Array.from({length:20},(_,i) => i +1).map((num) =>(<option value={num} key={num}>{num}</option>))}
      </select>
      <input type="text" placeholder="Add to packing list" value={description} onChange={(e) =>setDescription(e.target.value)}/>
      <button>Add</button>
    </form>
  )
}




export const PackingList = ({items, onDeleteItem}) => {
  return (
    <div className='list'>
    <ul>
      {items.map(item => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />)}
    </ul> 
    </div>
  )
}

export const Item = ({item, onDeleteItem}) =>{
  return (
  <li>
    <input type="checkbox"  value={item.packed} onChange={()=>{}}/>
    <span style={item.packed ? {textDecoration:
       "line-through"} : {}}>
        {item.quantity} {item.description}
    </span>
    <button onClick={() =>onDeleteItem(item.id)}>❌</button>
  </li>
  )


}






export const Stats = () => {
  return (
   <footer className='stats'>
    You have x items on your list and you have already paced
   </footer>
  )
}







