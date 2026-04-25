import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
