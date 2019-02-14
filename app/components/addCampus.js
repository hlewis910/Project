
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postCampus } from '../reducers'

class AddCampus extends Component {  
  constructor() {
    super()
    this.state = {
      name: '',
      address: '',
    }

  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
} 
  handleSubmit = event => {
    event.preventDefault();
    this.props.addCampus(this.state);
    this.setState({
      name: '',
      address: ''
    })
  } 
  render () {
    return (
        <div className="additionalCampusAdded Form">
          <h3></h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Campus Name</label>
          <input onChange={this.handleChange} name="name" type="text" value={this.state.name} placeholder='Name'/>
          <label htmlFor="address">Campus Address</label>
          <input onChange={this.handleChange} name="address" type="text" value={this.state.address} placeholder='Address'/>         
          <button type="submit">Submit</button>
          
        </form>
        </div>
  )
}
}

const mapDispatchToProps = (dispatch) => ({
    addCampus: (additionalCampus) => dispatch(postCampus(additionalCampus))
})

export default connect(null, mapDispatchToProps)(AddCampus)
