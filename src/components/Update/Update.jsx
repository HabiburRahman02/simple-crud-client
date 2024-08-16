import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const updateUser = { name, email }
        console.log(updateUser)

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert(`updated success`)
                }
            })

    }

    return (
        <div>
            <h1>Update: {loadedUser.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser.name} id="" /><br />
                <input type="email" name="email" defaultValue={loadedUser.email} id="" /><br />
                <input type="submit" value="Add User" /><br />
            </form>
        </div>
    );
};

export default Update;