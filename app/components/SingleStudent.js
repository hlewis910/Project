import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleStudent } from '../reducers'
import Student from './Student';

class SingleStudent extends Component  {

  componentDidMount() {
    const studentId = this.props.match.params.studentsId
    this.props.fetchSingleStudent(studentId)
  }
  
  render () {
    const campuses = this.props.campuses.filter(campus => campus.id === this.props.student.campusId)
      return (
        <div>
          <Student student={this.props.student} />
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