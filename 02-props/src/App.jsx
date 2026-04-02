import React from 'react'
import Card from './component/card'


export const App = () => {
  return (

    <div className='parent'>
      <Card  user='Mahipal' age={19} img='https://plus.unsplash.com/premium_photo-1774271492622-2caebba85850?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Rahul' age={20} img='https://images.unsplash.com/photo-1774267916884-afae166d49b3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Rohit' age={21} img="https://plus.unsplash.com/premium_photo-1773402770128-f1750911363f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user='Satyarth' age={22} img="https://images.unsplash.com/photo-1774413768903-057eb084133b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  ) 
}
export default App;