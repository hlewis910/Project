import React from 'react'
import { connect } from 'react-redux'
import { destroyStudent } from '../reducers'
import AddStudent from './addStudent'
//import EditStudent from './EditStudent'
import StudentView from './StudentView'


  const Students = (props) => {
    return (
    <div>
      <h1></h1>
      <div>
      <AddStudent />
      <StudentView studentsAll={props.studentsAll} removeStudent={props.removeStudent} />  
      {/* <EditStudent /> */}
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
