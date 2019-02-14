import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleStudent } from '../reducers'
import Student from './Student';

class SingleStudent extends Component  {

  componentDidMount() {
    const studentId = this.props.match.params.studentId
    this.props.fetchSingleStudent(studentId)
  }
  
  render () {
    const student = this.props.student
      return (
        <div>
          <Student student={student} />
        </div>
      )
  }
}


const mapStateToProps = (state) => ({
    student: state.student,
    campuses: state.campuses
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchSingleStudent: (studentId) => dispatch(fetchSingleStudent(studentId)),
  })
  

  export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)