import axios from "axios"
import { useEffect, useState } from "react"
import type { ReqResUserListResponse, User } from "../interfaces";


const loadUsers = async(): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://dummyjson.com/users');
        return  data.users;
    } catch (error) {
        console.log(error);
        return[];
    }
}

export const UsersPage = () => {

    const [users, setUsers] = useState<User[]> ([]);


    useEffect(() => {

        loadUsers().then( setUsers )

        // fetch(`https://dummyjson.com/users`)
        //     .then(resp => resp.json())
        //     .then (data => console.log(data));


    },[])



  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                      <UserRow key={ user.id} user={user}/>  
                    ))   
                }
            </tbody>
        </table>
        
        <div>
            <button>Prev</button>
            &nbsp;
            <button>Next</button>
        </div>


    </>
  );
};



interface Props {
    user: User;
}

export const UserRow = ({user}: Props) => {

    const { image, firstName, lastName, email} = user;

  return (
    <tr>
        <td><img style={{width:'50px'}} src={image} alt="User avatar"/></td>
        <td>{ firstName } { lastName }</td>
        <td>{ email }</td>
    </tr>
  )
}

