import React from 'react'
import { Link } from 'react-router-dom'

export default function StudentView (props) {
    return (

      <div className="studentsAll">
        {
          props.studentsAll.map(student => {
            return (
              <div key={student.id} className='Student'>
                <Link to={`/students/${student.id}`}><h3>{student.firstName}</h3></Link>
                <img src={student.imageUrl} />
                <button onClick={() => props.removeStudent(student.id)}>DELETE</button>
              </div>
            )
          })
        }
      </div>
  )
}
