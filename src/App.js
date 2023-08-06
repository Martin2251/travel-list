
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
 return(
  <div className='app'>
    <Logo/>
    <Form  />
    <PackingList  />
    <Stats  />

  </div>
 )
 
}



 export  const Logo = () => {
  return (
    <div>Logo</div>
  )
}


 export const Form = () => {

  function handleSubmit (e) {
    e.preventDefault();

  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3> what do you need for your trip?</h3>
      <select>
       {Array.from({length:20},(_,i) => i +1).map((num) =>(<option value={num} key={num}>{num}</option>))}
      </select>
      <input type="text" placeholder="Add to packing list"/>
      <button>Add</button>
    </form>
  )
}




export const PackingList = () => {
  return (
    <div className='list'>
    <ul>
      {initialItems.map(item => <Item item={item} key={item.id} />)}
    </ul> 
    </div>
  )
}

export const Item = ({item}) =>{
  return (
  <li><span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
  <button>Delete</button>
  </li>)


}






export const Stats = () => {
  return (
   <footer className='stats'>
    You have x items on your list and you have already paced
   </footer>
  )
}







