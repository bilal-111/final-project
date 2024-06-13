import React, { useEffect, useState } from 'react'

const ManageUsers = () => {

const [users, setUsers] = useState ([])

const getUsersList = async()=>{
    let result = await fetch ("https://fakestoreapi.com/users")
    result = await result.json ()
    console.log(result)
    setUsers (result)
   }


      useEffect ( ()=>{
        getUsersList()
       }, []);

       const deleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
      };
    


       
  return (
    <div>
      <h1 className='text-center text-4xl mb-4'>Managing Products</h1>

      <table align={"center"} width={"70%"} cellPadding={"10px"} cellSpacing={"5px"} className='table table-bordered'>
        <tr style={{backgroundColor: "blue", color: "white"}}>
          <td>Sr.No.</td>
          <td>Name</td>
          <td>User Name</td>
          <td>Email</td>
          <td>Password</td>
          <td>Operations</td>
        </tr>
        {
         users.map ((item, index)=>{
          return (
            <>
            <tr style={{backgroundColor: "lightblue"}}>
              <td>{index +1}</td>
              <td>{item.name.firstname}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>

                <button onClick={()=>deleteUser(index)} style={{border: "none", backgroundColor: "red", borderRadius: "5px", color: "white", padding: "2px 5px"}}>Delete</button>
              </td>
            </tr>
            
            </>
          )
         })
        }
      </table>



    </div>
  )
}

export default ManageUsers
