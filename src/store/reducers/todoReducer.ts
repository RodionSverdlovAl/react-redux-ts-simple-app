import { TodosState } from "../../types/todos";
import { TodosActionTypes } from "../../types/todos";
import { TodosAction } from "../../types/todos";

const defaultState:TodosState = {
    todos: [],
    loading: false,
    error: null,
}

export const todoReducer = (state = defaultState, action:TodosAction):TodosState =>{
    switch(action.type){
        case TodosActionTypes.FETCH_TODOS:
            return {loading: true, error: null, todos:[]}
        case TodosActionTypes.FETCH_TODOS_SUCCESS:
            return {loading: false, error: null, todos: action.payload}
        case TodosActionTypes.FETCH_TODOS_ERROR:
            return {loading: false, error: action.payload, todos:[]}
        default:
            return state;
    }
}