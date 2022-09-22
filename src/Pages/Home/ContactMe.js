import React, { useState } from "react";

const ContactMe = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form className="bg-slate-400" onSubmit={handleSubmit}>
      <div className="w-72 ml-3">
        <div>
          <label htmlFor="text">Name:</label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-sm h-40"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          {status}
        </button>
      </div>
    </form>
  );
};

export default ContactMe;
