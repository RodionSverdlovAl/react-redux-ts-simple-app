import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UsersActionTypes } from "../../types/users"
import { TodosAction, TodosActionTypes } from "../../types/todos"
export const fetchUsers = () =>{
    return async (dispatch:Dispatch<UserAction>)=>{
        try{
            dispatch({type:UsersActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({type:UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data}) 
        }catch(e){
            dispatch({type:UsersActionTypes.FETCH_USERS_ERROR, payload: 'loading error'})
        }
    }
}

export const fetchTodos =()=>{
    return async (dispatch:Dispatch<TodosAction>) =>{
        try{
            dispatch({type: TodosActionTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            dispatch({type:TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        }catch(e){
            dispatch({type:TodosActionTypes.FETCH_TODOS_ERROR, payload: "loading error"})
        }
       
    }
}