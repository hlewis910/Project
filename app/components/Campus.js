import React from 'react'


export default function Campus(props) {
  const {name,
     address,
      description,
       imageUrl } = props.campus 
  return (
    <div className="main">
        <h2>{name}</h2>
        <img src={imageUrl} />
        <p>Campus Address: {address}</p>
        <p>Campus Description: {description}</p>
    </div>
  )
}
