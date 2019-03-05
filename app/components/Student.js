import React from 'react'

export default function Student(props) {
  const {
    firstName,
    lastName,
    imageUrl,
    gpa,
    email } = props.student
  return (
    <div className="main">
        <h2> Name: {firstName} {lastName}</h2>
        <img src={imageUrl} />
        <p>Email: {email}</p>
        <p>GPA: {gpa}</p>
    </div>
  )
}
