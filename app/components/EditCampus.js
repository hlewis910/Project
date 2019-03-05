import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateCampus} from '../reducers'

class EditCampus extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.putCampus({...this.state, id: this.props.campusId})
    }

    render() {
        return (
            <div className='addCampusForm'>
            <h2>Edit Campus Form</h2>
            <form onSubmit= {this.handleSubmit}>
            <label htmlFor="name" > Campus Name</label>
            <input onChange = {this.handleChange} name="name" type="text"
            value={this.state.name} >
            <label htmlFor="address"> Campus Address </label>
            <input onChange={this.handleChange} name="address" type="text"
            value={this.state.address} />
            <button type="submit">Edit Campus</button>
              </form>
            </div>
        )
      }
}


const mapDispatchToProps = (dispatch) => ({
    putCampus: (data) => dispatch(updateCampus)(data)
})

export default connect(null, mapDispatchToProps)(EditCampus)