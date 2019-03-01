import React from 'react'
import { connect } from 'react-redux'
import AddCampus from './addCampus'
import { destroyCampus } from '../reducers'
import CampusView from './CampusView'
import EditCampus from './EditCampus'


const Campuses = (props) => {
  console.log(props, 'hello')
  return (
    <div>
      <h1> </h1>
      <div>
      <AddCampus />
      <CampusView campusesAll={props.campusesAll} removeCampus={props.removeCampus} />
      <EditCampus/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    campusesAll: state.campuses
})


const mapDispatchToProps = (dispatch) => ({
  removeCampus: (campusId) => dispatch(destroyCampus(campusId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Campuses)
