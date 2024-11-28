import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const userList=useLoaderData()
    const [allUsers,setAllUsers]=useState(userList)
   
    const handleDelete=_id=>{
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert("Data deleted successfully!!!")
                const remaining=allUsers.filter(currUser=>currUser._id!==_id)
                setAllUsers(remaining)
            }

        })
    }
    return (
        <div>
            <h1>User List</h1>
            {
                allUsers.map(user=><h1 key={user._id}>{user.email} <button onClick={()=>handleDelete(user._id)}>X</button> </h1> )
            }
        </div>
    );
};

export default Users;