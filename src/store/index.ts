import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { userReducer } from './reducers/userReducer'

const rootReducer = combineReducers({
    users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))