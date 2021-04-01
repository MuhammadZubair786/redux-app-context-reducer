import React,{useContext} from 'react';
import { GlobalContext } from './Store/GlobalState'

function User_Render() {

    const { User,User_Register ,deleteUser } = useContext(GlobalContext)

    const delete_data = (key)=>{
        console.log("Key : ",key)
        deleteUser(key)

    }

    return (
        <div>
            <ul>
                {User.map((v,i)=>{
                    return(
                        <li key={i}>
                            <h1>Name : {v.name}</h1>
                            <h2>Email : {v.email}</h2>
                            <button onClick={()=>{delete_data(i)}}>Delete</button>
                        </li>
                    )
                })}
              
            </ul>
            
        </div>
    );
}

export default User_Render;