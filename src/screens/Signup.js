import React,{ useState } from "react";
import axios from "axios";

function Signup(props) {

const [user, setUser] = useState({
  userName: "",
  userEmail: "",
  userPassword: "",
});

const handleChange = (e) => {
  const value = e.target.value;
  setUser({ ...user, [e.target.name]: value });
};

const submitHandler = (e) => {
  // e.preventDefault();
  // alert(JSON.stringify(user));
  axios.post("http://localhost:5000/api/register", user);
  console.log(user);
};
  return (
    <div className="bg-rose-400 flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-md w-96">
        <form className="flex flex-col p-8 rounded-xl">
          <h1 className="text-xl mb-6 font-bold text-black">Signup</h1>
          <label className="text-black mt-2">Name:</label>
          <input
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleChange}
            className="rounded-xl px-3 py-2 mt-2 border-2 border-black"
            placeholder="eElon Musk"
          ></input>
          <label className="text-black mt-2">Email:</label>
          <input
            type="email"
            name="userEmail"
            value={user.userEmail}
            onChange={handleChange}
            className="rounded-xl px-3 py-2 mt-2 border-2 border-black"
            placeholder="elon@tesla.com"
          ></input>
          <label className="text-black mt-2">Password:</label>
          <input
            type="password"
            name="userPassword"
            value={user.userPassword}
            onChange={handleChange}
            className="rounded-xl px-3 py-2 mt-2 border-2 border-black"
            placeholder="Enter about your organization in 20-25 words."
          ></input>
          <a
            href="/dashboard"
            className="px-3 py-2 bg-black rounded-xl text-white mt-4"
            onClick={submitHandler}
          >
            Signup
          </a>
        </form>
        <div className="flex justify-center items-center mb-8">
          Already have an account?{" "}
          <a href="/login" className="underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
