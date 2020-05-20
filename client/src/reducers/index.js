import dataReducer from './data'
import modalReducer from './modal'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    data: dataReducer,
    modal: modalReducer
})

export default allReducers