import React from 'react'
import { Link } from 'react-router-dom'

export default function CampusView (props) {    
    return (

    <div className="campusesAll">
      {
        props.campusesAll.map(campus => {
          return (
            <div key={campus.id} className='Campus'>
              <Link to={`/campuses/${campus.id}`}><h3>{campus.name}</h3></Link>
              <img src={campus.imageUrl} /> 
              <button onClick={() => props.removeCampus(campus.id)}>DELETE</button>
            </div>
          )  
        })
      }
    </div>
  ) 
}
