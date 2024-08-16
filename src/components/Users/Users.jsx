import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const LoadedUsers = useLoaderData();
    const [users, setUsers] = useState(LoadedUsers);

    const handleDelete = id => {
        console.log(id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount === 1) {
                    alert('user deleted successfully')
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining)
                }
            })
    }

    return (
        <div>
            <h2>User: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        <button
                            onClick={() => handleDelete(user._id)}
                        >X</button>  {user.name} : {user.email} : {user._id}
                        <Link to={`/update/${user._id}`}>
                            <button>Update</button>
                        </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;