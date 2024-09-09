import { useLoaderData, Link } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updatedUser = { name, email };
    console.log(loadedUser._id);

    fetch(`http://localhost:5001/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            alert('user updated successfully!')
        }
      });
  };
  return (
    <div className="mt-32 text-center">
      <h2 className="text-2xl text-center">
        Update information of {loadedUser.name}
      </h2>
      <form
        onSubmit={handleUpdate}
        className="text-center w-fit mx-auto my-5 border p-10 space-y-4"
      >
        <input
          className="px-4  w-full py-3 border"
          type="text"
          name="name"
          id=""
          defaultValue={loadedUser?.name}
        />
        <br />
        <input
          className="px-4 w-full  py-3 border"
          type="email"
          name="email"
          id=""
          defaultValue={loadedUser?.email}
        />
        <br />
        <input
          className="btn btn-secondary w-full  border"
          type="submit"
          value="Update"
        />
      </form>
      <div className="mt-10">
        <Link to="/" className=" border p-2 bg-gray-400">
          HomePage
        </Link>
      </div>
    </div>
  );
};

export default Update;
