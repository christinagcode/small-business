import { combineReducers } from 'redux';

const business = (state = [], action) => {
    console.log('inside reducer', action)
    switch(action.type){
        case "ADD_BIZ":
            return [action.payload, ...state]
        case "REMOVE_BIZ":
            let newState = [...state]
            newState.splice(action.payload, 1)

            return newState

        default:
            return state
    }
}

export default combineReducers({business});