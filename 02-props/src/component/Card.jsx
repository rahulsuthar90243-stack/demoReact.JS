import React from 'react'

export const Card = (props) => {
  return (
    <div className='card'>
          <img src={props.img} alt="Rahul" />
            <h2>{props.user}</h2>
            <h3>{props.age}</h3>
            <p>software engineer and designer</p>
            <button>Click me</button>
        </div>
  )
}

export default Card;
