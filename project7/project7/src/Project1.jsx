import React, { useState } from "react";
import "./Project1.css";

function Project1() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    aadhaar: "",
    pan: "",
    address: "",
    pincode: "",
    password: "",
    photo: null
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm({
      ...form,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim() === "") {
      alert("Please enter your full name");
      return;
    }

    if (form.age < 18 || form.age > 100) {
      alert("Age must be between 18 and 100");
      return;
    }

    if (form.gender === "") {
      alert("Please select your gender");
      return;
    }

    if (!/^[6-9][0-9]{9}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!/^[0-9]{12}$/.test(form.aadhaar)) {
      alert("Aadhaar number must contain exactly 12 digits");
      return;
    }

    if (!/^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/.test(form.pan)) {
      alert("Please enter a valid PAN number");
      return;
    }

    if (form.address.trim() === "") {
      alert("Please enter your address");
      return;
    }

    if (!/^[0-9]{6}$/.test(form.pincode)) {
      alert("PIN code must contain exactly 6 digits");
      return;
    }

    if (form.password.length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }

    if (!form.photo) {
      alert("Please select a profile photo");
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 5000);

    setForm({
      name: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      aadhaar: "",
      pan: "",
      address: "",
      pincode: "",
      password: "",
      photo: null
    });

    document.getElementById("photo").value = "";
  };

  return (
    <div className="container">

      <div className="form-box">

        <h1>Aadhaar User Registration</h1>
        <p className="subtitle">Enter your details to register</p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />

          <label>Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter 10-digit phone number"
            maxLength="10"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label>Aadhaar Number</label>
          <input
            type="text"
            name="aadhaar"
            value={form.aadhaar}
            onChange={handleChange}
            placeholder="Enter 12-digit Aadhaar number"
            maxLength="12"
          />

          <label>PAN Number</label>
          <input
            type="text"
            name="pan"
            value={form.pan}
            onChange={handleChange}
            placeholder="Enter PAN number"
            maxLength="10"
          />

          <label>Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter your address"
          ></textarea>

          <label>PIN Code</label>
          <input
            type="text"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="Enter 6-digit PIN code"
            maxLength="6"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />

          <label>Profile Photo</label>
          <input
            id="photo"
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit">Register</button>

        </form>

        {success && (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Registration Successful!</h2>
            <p>Your Aadhaar registration has been completed successfully.</p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Project1;