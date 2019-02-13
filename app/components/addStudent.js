import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postStudent } from '../reducers'

class AddStudent extends Component  {  
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange= this.handleChange.bind(this)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.additionalStudent(this.state)
  }
  render () {
    return (
        <div className="additionalStudentAdded">
          <h3>Additional Student</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input onChange={this.handleChange} name="firstName" type="text" value={this.state.firstName} placeholder='FIRST NAME'/>  
          <label htmlFor="lastName">Last Name</label>
          <input onChange={this.handleChange} name="lastName" type="text" value={this.state.lastName} placeholder='LAST NAME'/>
           <label htmlFor="email">Email Address</label>
          <input onChange={this.handleChange} name="email" type="text" value={this.state.email} placeholder='EMAIL'/>      
          <button type="submit">Student</button> 
        </form>
     </div>
  )
 }
}

const mapDispatchToProps = (dispatch) => ({
    addStudent: (additionalStudent) => dispatch(postStudent(additionalStudent))
})

export default connect(null, mapDispatchToProps)(AddStudent)
