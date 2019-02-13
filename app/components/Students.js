import React from 'react'
import { connect } from 'react-redux'
import { destroyStudent } from '../reducers'
import AddStudent from './addStudent'
import StudentView from './StudentView'


  const Students = (props) => {
    return (
    <div>
      <h1> Students </h1>
      <div>
      <AddStudent />
      <StudentView studentsAll={props.studentsAll} removeStudent={props.removeStudent} />   
      </div>
    </div>
  )
   }

const mapStateToProps = (state) => ({
    studentsAll: state.students
})

const mapDispatchToProps = (dispatch) => ({
  removeStudent: (studentId) => dispatch(destroyStudent(studentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Students)
