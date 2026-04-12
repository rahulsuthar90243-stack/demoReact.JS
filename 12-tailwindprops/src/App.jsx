import React from 'react'
import { PageSection } from './components/PageSection'


export const App = () => {

const people = [
  {
    id: 1,
    name: "Rahul",
    role: "Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Mahipal",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Neha",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    name: "Priya",
    role: "Frontend Dev",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "Rohit",
    role: "Backend Dev",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  }
];

<PageSection people={people} />

  return (
    <div>
      <h1 className='text-3xl font-bold  bg-green-200 p-5'>Tailwind Props</h1>
      <PageSection people={people}/>
    </div>
  )
}

export default App