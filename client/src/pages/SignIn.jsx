import React, { useState } from "react";
import axios from "axios";
import "../css/SignIn.css";
function SignIn() {
  const [name, setname] = useState();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(name, password);
    try {
      const res = await axios.post("http://localhost:8000/api/auth/signin", {name, password})
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSingUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/auth/signup', {name, email, password})
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="signInContainer">
      <div className="signInCard">
        <h1 className="videoTitle">Sign In</h1>
        <p className="smallHeading">
          Stay Updated and enjoy best recommendations
        </p>
        <form>
          <input
            type="text"
            name="name"
            className="smallHeading"
            onChange={(e) => setname(e.target.value)}
            placeholder="name"
          />
          <input
            type="password"
            className="smallHeading"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <p className="tinyTexts">Forgot Password?</p>
          <button className="signInBtn smallHeading" onClick={handleSignIn}>
            Sign In
          </button>
        </form>

        <p className="tinyTexts" style={{ textAlign: "center" }}>
          or
        </p>

        <form>
          <input
            type="text"
            name="name"
            className="smallHeading"
            placeholder="name"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="email"
            name="email"
            className="smallHeading"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="smallHeading"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <p className="tinyTexts">Forgot Password?</p>
          <button className="signInBtn smallHeading" onClick={handleSingUp}>Sign Up </button>
        </form>

        <button className="smallHeading">Sign In With Google</button>
      </div>
    </div>
  );
}

export default SignIn;
