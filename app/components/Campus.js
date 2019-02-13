import React from 'react'


export default function Campus(props) {
  const { campus } = props  
  return (
    <div className="main">
        <h2>{campus.name}</h2>
        <img src={campus.imageUrl} />
        <p>Campus Address: {campus.address}</p>
        <p>Campus Description: {campus.description}</p>
    </div>
  )
}
