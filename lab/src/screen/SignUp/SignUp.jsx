import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/apiconfig"; 
// import Layout from "../../components/Layout/Layout"; 


export default function SignUp(props) {
  const [newUser, setNewUser] = useState({
    userName: "",
    avatar: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validationMessage, setValidationMessage] = useState("");
  const [valid, setValid] = useState(false);
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(newUser);
    console.log(newUser);
    navigation("/login");
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    console.log("validator");
    // const res = signUp(newUser);
    // console.log(res);
    checkIfValid();
  }, [newUser.password, newUser.confirmPassword]);

  const checkIfValid = () => {
    if (newUser.password === "" || newUser.confirmPassword === "") {
      setValidationMessage("");
      setValid(false);
    } else if (newUser.password.length < 9) {
      setValidationMessage("Short password! Must be at least 8 characters");
    } else if (newUser.password !== newUser.confirmPassword) {
      setValidationMessage("Passwords must much!");
      setValid(false);
    } else {
      setValidationMessage("Password match!");
      setValid(true);
    }
  };
// console.log(props);
  return (
      <div className="w-full flex items-center text-base bg-gradient-to-r from-blue-800 to-blue-900 h-screen w-full" style={{fontFamily:"Nunito"}}>
      <form className=" relative mr-auto ml-auto w-max max-w-lg bg-white shadow-md rounded text-sm px-3 pb-3 w-6/12" onSubmit={handleSubmit}>
      <h2 className="text-center font-bold ">Sign up</h2>
          <br/>
          <label >User name</label>
          <br />
          <input
            type="text"
            placeholder="create user name"
            id="userName"
            value={newUser.userName}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <label>Upload avatar</label>
          <br />
          <input
            type="text"
            placeholder="avatar link"
            id="avatar"
            value={newUser.avatar}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <label>First Name</label>
          <br />
          <input
            type="text"
            placeholder="first name"
            id="firstName"
            value={newUser.firstName}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <label>Last Name</label>
          <br />
          <input
            type="text"
            placeholder="last name"
            id="lastName"
            value={newUser.lastName}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="email"
            id="email"
            value={newUser.email}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="text"
            placeholder="create password"
            id="password"
            value={newUser.password}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <label>Confirm password</label>
          <br />
          <input
            type="text"
            placeholder="confirm password"
            id="confirmPassword"
            value={newUser.confirmPassword}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <h3>{validationMessage}</h3>
          <br />
          <button className="flex-shrink-0 bg-blue-900 hover:bg-blue-900 border-blue-700 hover:border-blue-900 text-sm border-4 text-white py-1 px-2 rounded text-base" disabled={!valid}>
            SIGN UP
          </button>
        </form>
      </div>
  );
}