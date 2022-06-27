import { useAction } from "../hooks/useAction"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useEffect } from "react";

const TodoList:React.FC = () =>{
    const {fetchTodos} = useAction();
    const {todos,loading,error} =useTypedSelector(state=>state.todos)

    useEffect(()=>{
        fetchTodos() as any
    },[])

    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }

    return(
        <div>
            {todos.map(todo=><div>
                <input type="checkbox" checked={todo.completed} />
                <h3>{todo.title}</h3>
            </div>)}
        </div>
    )
}

export default TodoList