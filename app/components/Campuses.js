import React from 'react'
import { connect } from 'react-redux'
import AddCampus from './addCampus'
import { destroyCampus } from '../reducers'
import CampusView from './CampusView'


const Campuses = (props) => {
  console.log(props, 'hello')
  return (
    <div>
      <h1> Campuses </h1>
      <div>
      <AddCampus />
      <CampusView campusesAll={props.campusesAll} removeCampus={props.removeCampus} />
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
