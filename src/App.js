import React from 'react'
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
  return (
    <div className='add-form'>
      <h3> what do you need for your trip?</h3>
    </div>
  )
}




export const PackingList = () => {
  return (
    <div className='list'>
      List
    </div>
  )
}






export const Stats = () => {
  return (
   <footer>
    You have x items on your list and you have already paced
   </footer>
  )
}







