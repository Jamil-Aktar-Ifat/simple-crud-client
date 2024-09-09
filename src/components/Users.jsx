import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5001/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully!");
          const remainingUsers = users.filter((user) => user._id !== _id);
          setUsers(remainingUsers);
        }
      });
  };
  return (
    <div className="text-center">
      <h2 className="text-2xl text-center mt-36">This is Users Page</h2>
      <p className="mt-10">Total Users: {users.length}</p>
      <div className="border mb-4 p-10 w-fit text-center mx-auto mt-4">
        {users.map((user) => (
          <p key={user._id} className="mt-2 border p-4">
            Name: {user.name} <br /> Email: {user.email}
            <br />
            {user._id}
            <Link to={`/update/${user._id}`}>
              <button className="p-2 mt-3 bg-red-600 text-white m-3">
                Update
              </button>
            </Link>
            <button
              className="p-2 mt-3 bg-red-600 text-white"
              onClick={() => handleDelete(user._id)}
            >
              Delete
            </button>
          </p>
        ))}
      </div>
      <div className="mt-10">
        <Link to="/" className=" border p-2 bg-gray-400">
          HomePage
        </Link>
      </div>
    </div>
  );
};

export default Users;
