import React, { useState } from "react";
import axios from "axios";
import "../components/UserForm.css";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      console.error("Error saving user:", error);
      setMessage("Details saved successfully");
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
      {message && <p>{message}</p>}
    </>
  );
};

export default UserForm;
