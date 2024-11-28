

import { NavLink } from 'react-router-dom';
import './App.css'

function App() {

  const handleFormData=e=>{
    e.preventDefault()
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email}
    console.log(user)
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      
  })
  }
  return (
    <>
      <h1>Table of User and Mongo</h1>
      <form action="" onSubmit={handleFormData}>
        <input type="text" name="name" id="" /><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="Submit" id="" />
      </form>
      <NavLink to='/users'>User List</NavLink>
    </>
  )
}

export default App
