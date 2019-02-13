import React, { Component } from 'react'
import { Route, withRouter} from 'react-router-dom'
import { fetchCampusList, fetchStudentList} from '../reducers';
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Homepage from './Homepage'
import Campuses from './Campuses'
import Students from './Students'
import SingleStudent from './SingleStudent'
import Campus from './Campus'


class Root extends Component {

componentDidMount() {
  this.props.fetchCampusList()
  this.props.fetchStudentList()
}

render() {
  return (
    <div>
      <Navbar/>
      <main>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/campuses' component={Campuses} />
      <Route path='/campuses/:campusesId' component={Campus} />
      <Route exact path='/students' component={Students} />
      <Route path='/students/:studentId' component={SingleStudent} />
      </main>
    </div>
  )
 }
}

const mapDispatchToProps  = (dispatch) => ({
  fetchCampusList: () => dispatch(fetchCampusList()),
  fetchStudentList: () => dispatch(fetchStudentList())
})


export default withRouter(connect(null, mapDispatchToProps)(Root))

