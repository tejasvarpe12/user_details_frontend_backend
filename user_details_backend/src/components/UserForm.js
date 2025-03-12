import React, { useState } from "react";
import axios from "axios";
import "../components/UserForm.css";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("User saved:", name, email,age);
    try {
      const response = await axios.post("http://localhost:5000/api/users", {
        name,
        email,
        age,
      });
      console.log("User saved:", response.data);
      setName("");
      setEmail("");
      setAge("");
      setMessage("Details saved successfully");
    } catch (error) {
      setError(true);
      console.error("Error saving user:", error);
      setMessage("Error occured while saving user details...");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Age </label>
          <input
            className="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {message && <p style={{color : error ? "red" : "green"}}>{message}</p>}
    </>
  );
};

export default UserForm;
