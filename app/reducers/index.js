/* eslint-disable complexity */
// `combineReducers` is not currently being used...but it should!
//import {combineReducers} from 'redux'
import axios from 'axios'

const GET_CAMPUSLIST = 'GET_CAMPUSLIST'
const GET_STUDENTLIST = 'GET_STUDENTLIST'

const initialState = {
  campuses: [],
  campus: {
    students: []
  },
  students: [],
  student: {
    campus: {}
  }
}

export const getCampusList = (campusList) => ({ 
  type: GET_CAMPUSLIST,
  campusList
})

export const getStudentList = (studentList) => ({
  type: GET_STUDENTLIST,
  studentList
})

const GET_SINGLECAMPUS = 'GET_SINGLECAMPUS'
const GET_SINGLESTUDENT = 'GET_SINGLESTUDENT'

export const getSingleCampus  = (campus) => ({
  type: GET_SINGLECAMPUS,
  campus
})

export const getSingleStudent = (student) => ({
  type: GET_SINGLESTUDENT,
  student
})

const ADD_CAMPUS = 'ADD_CAMPUS'
const ADD_STUDENT = 'ADD_STUDENT'

export const addCampus = (additionalCampus) => ({
  type: ADD_CAMPUS,
  additionalCampus
})

export const addStudent = (additionalStudent) => ({
  type: ADD_STUDENT,
  additionalStudent
})

const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
const UPDATE_STUDENT = 'UPDATE_STUDENT'

export const updateCampus = (campusId) => ({
  type: UPDATE_CAMPUS,
  campusId
})

export const updateStudent = (studentId) => ({
  type: UPDATE_STUDENT,
  studentId
})

const REMOVE_CAMPUS = 'REMOVE_CAMPUS'
const REMOVE_STUDENT = 'REMOVE_STUDENT'

export const removeCampus = (campusId) => ({
  type: REMOVE_CAMPUS,
  campusId
})

export const removeStudent = (studentId) => ({
  type: REMOVE_STUDENT,
  studentId
})


//THUNKS
export const fetchCampusList = () => {
  return async(dispatch) => {
      const response = await axios.get(`/api/campuses`)
      const allCampuses = response.data
      const action = getCampusList(allCampuses)
      dispatch(action);
  }
}

export const fetchStudentList = () => {
  return async(dispatch) => {
      const response = await axios.get(`/api/students`)
      const allStudents = response.data
      const action = getStudentList(allStudents)
      dispatch(action)
  }
}

export const fetchSingleCampus = (campusId) => {
  return async(dispatch) => {
      const response = await axios.get(`/api/campuses/${campusId}`)
      const singleCampus = response.data
      const action = getSingleCampus(singleCampus)
      dispatch(action)
  }
}

export const fetchSingleStudent = (studentId) => {
  return async(dispatch) => {
      const response = await axios.get(`/api/students/${studentId}`)
      const singleStudent = response.data
      const action = getSingleStudent(singleStudent)
      dispatch(action)
  }
}

export const postCampus = (additionalCampus) => {
  return async(dispatch) => {
      const response = await axios.post(`/api/campuses`, additionalCampus)
      const newCampus = response.data
      const action = addCampus(newCampus)
      dispatch(action)
      //socket.emit('new-campus', newCampus);
  }
}

export const postStudent = (additionalStudent) => {
  return async(dispatch) => {
      const response = await axios.post(`/api/students`, additionalStudent)
      const newStudent = response.data
      const action = addStudent(newStudent)
      dispatch(action)
      //socket.emit('new-campus', newCampus);
  }
}

export const putCampus = (campusId) => {
  return async(dispatch) => {
    const response = await axios.put(`/api/campuses/${campusId}`)
    const updatedCampus = response.data
    const action = updateCampus(updatedCampus)
    dispatch(action)
  }
}

export const putStudent = (studentId) => {
  return async(dispatch) => {
    const response = await axios.put(`api/students/${studentId}`)
    const updatedStudent = response.data
    const action = updateStudent(updatedStudent)
    dispatch(action)
  }
}

export const destroyCampus = (campusId) => {
  return async(dispatch) => {
   await axios.delete(`/api/campuses/${campusId}`)
   await dispatch(removeCampus(campusId))
  }
}

export const destroyStudent = (studentId) => {
  return async(dispatch) => {
   await axios.delete(`/api/students/${studentId}`)
   await dispatch(removeStudent(studentId))
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUSLIST: {
      const newState = {...state, campuses: action.campusList}
      return newState
    }
    case GET_STUDENTLIST: {
      return  {...state, students: action.studentList}
    }
    case GET_SINGLECAMPUS: {
    return  {...state, campus: action.campus}
    }
    case GET_SINGLESTUDENT: {
    return  {...state, student: action.student}
    }
    case ADD_CAMPUS: {
      return {...state, campuses: [...state.campuses, action.additionalCampus]}
    }
    case ADD_STUDENT: {
      return {...state, students: [...state.students, action.additionalStudent]}
    }
    case UPDATE_CAMPUS: {
      return {...state, campuses: [...state.campuses, action.updatedCampus]}
    }
    case UPDATE_STUDENT: {
      return {...state, students: [...state.students, action.updatedStudent]}
    }
    case REMOVE_CAMPUS: {
    return {...state, campuses: state.campuses.filter(campus => campus.id !== action.campusId)}
    }
    case REMOVE_STUDENT: {
      return {...state, students: state.students.filter(student => student.id !== action.studentId)}
    }
    default:
      return state
  }
}

export default rootReducer
