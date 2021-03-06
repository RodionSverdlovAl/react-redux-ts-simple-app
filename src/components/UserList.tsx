import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useAction } from "../hooks/useAction"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchUsers } from "../store/action-creaters/user"

const UserList: React.FC = () =>{

    const {fetchUsers} = useAction()
    const {users,loading,error} =useTypedSelector(state=>state.users)

    useEffect(()=>{
        fetchUsers() as any
    },[])

    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return(
        <div>
            {users.map(user=><h3 key={user.id}>{user.name}</h3>)}
        </div>
    )
}

export default UserList