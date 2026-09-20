import React from 'react'

export default function Greeting(props) {
  return (
    <div>
      <h2>Good afternoon {props.name}</h2>
      <h3>{props.name}'s age is {props.age}</h3>
      <h3>skill is {props.item}</h3>
      <ul>
        {props.item.map((skill,index) => (
            <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
