
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
} 
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
} 
  handleSubmit = event => {
    event.preventDefault();
    this.props.additionalCampus(this.state);
    this.setState = {}
  } 
  render () {
    return (
        <div className="additionalCampusAdded Form">
          <h3>Additional Campus</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Campus Name</label>
          <input onChange={this.handleChange} name="name" type="text" value={this.state.name} placeholder='Name'/>
          <label htmlFor="address">Campus Address</label>
          <input onChange={this.handleChange} name="address" type="text" value={this.state.address} placeholder='Address'/>         
          <button type="submit">Add Campus</button>
          
        </form>
        </div>
  )
}
}

const mapDispatchToProps = (dispatch) => ({
    addCampus: (additionalCampus) => dispatch(postCampus(additionalCampus))
})

export default connect(null, mapDispatchToProps)(AddCampus)
