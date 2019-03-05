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
      console.log(this.props.campus)

      return (
        <React.Fragment>
          <div>
          <Campus campus={campus} />
          </div>
          <div>
            {/* <p>{ campus.students[0].campusId }</p> */}
            <p>This is a test parargraph</p>
            
          </div>
        </React.Fragment>
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