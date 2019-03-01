import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleCampus } from '../reducers'
import Campus from './Campus'

class SingleCampus extends Component {

  componentDidMount() {
      const campusId = this.props.match.params.campusId
      this.props.fetchSingleCampus(campusId)
  }

  render() {
      const campus = this.props.campus
     // console.log(campus, "CATTTTTTTTTTTT")
     // console.log(campus.students[0].firstName, "DANYYYYYY")
      return (
          <div>
          <Campus campus={campus} />
          </div>
      )
  }
}

const mapStateToProps = (state) => ({
    campus: state.campus
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchSingleCampus: (campusId) => dispatch(fetchSingleCampus(campusId))
  })
  

  export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)