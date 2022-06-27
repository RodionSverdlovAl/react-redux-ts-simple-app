import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { userReducer } from './reducers/userReducer'
import { todoReducer } from './reducers/todoReducer'

const rootReducer = combineReducers({
    users: userReducer,
    todos: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))