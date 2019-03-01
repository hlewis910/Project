import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateStudent} from '../reducers'


class EditStudent extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastname: '',
            email: ''
        }
    }

    handleChane = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.putStudent({...this.state, id: this.props.studentId })
    }

    render() {
        return (
            <div className="addCampusForm">
            <h2> Edit Student Form </h2>
            <form onSubmit= {this.handleSubmit}>
            <label htmlFor="firstName" > Student First Name</label>
            <input onChange ={this.handleChange} name="firstName" type="text"
            value={this.state.firstName} placeholder="Edit First Name" />

            <label htmlFor="lastName"> Student Last Name </label>
            <input onChange= {this.handleChange} name="lastName" type="text"
            value={this.state.lastName} placeholder="Edit Last Name" />

            <label htmlFor="email">Email</label> 
            <input onChange={this.handleChange} name="email" type="text"
            value={this.state.email} placeholder= "Edit Email" />      
            <button type="submit">Edit Student</button>
            </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    putStudent: (data) => dispatch(updateStudent(data))
})

export default connect(null, mapDispatchToProps)(EditStudent)
