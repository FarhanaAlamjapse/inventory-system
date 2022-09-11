import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="name"
          value={name}
          placeholder="Your full name"
          id="name"
          name="name"
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          placeholder="youremail@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={pass}
          placeholder="********"
          onChange={(e) => setPass(e.target.value)}
          id="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here
      </button>
    </div>
  );
};
