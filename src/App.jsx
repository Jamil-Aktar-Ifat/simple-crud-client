import { Link } from "react-router-dom";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5001/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User added successfully!");
          form.reset();
        }
      });
  };

  return (
    <>
      <h1 className="text-2xl text-center mt-20">Simple CRUD</h1>
      <form
        onSubmit={handleSubmit}
        className="text-center w-fit mx-auto my-5 border p-10 space-y-4"
      >
        <input
          className="px-4  w-full py-3 border"
          type="text"
          name="name"
          id=""
          placeholder="Your Name"
        />
        <br />
        <input
          className="px-4 w-full  py-3 border"
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
        />
        <br />
        <input
          className="btn btn-secondary w-full  border"
          type="submit"
          value="Submit"
        />
      </form>
      <h2 className="text-center font-medium text-xl">
        Check out the{" "}
        <Link to="/users" className="text-blue-400">
          Users
        </Link>
      </h2>
    </>
  );
}

export default App;
