"use client";
import { useState } from "react";

export default function Mailer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [thanks, setThanks] = useState(false);
  const [error, setError] = useState(false);

  const cleanup = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const submitForm = (e) => {
    e.preventDefault();
    const values = { name: name, email: email, message: message };
    fetch("https://eolzj1383s0l84f.m.pipedream.net", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        cleanup();
        setThanks(true);
      } else {
        setError(true);
      }
    });
  };

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeMssg = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <form acceptCharset="utf-8" onSubmit={submitForm} className="postform">
        <div>
          <label>Name*</label>
          <input onChange={changeName} type="text" required="required" size="30" maxLength="30" value={name} />
          <br />
          <br />
          <label>Email*</label>
          <input onChange={changeEmail} type="email" required="required" size="30" maxLength="30" value={email} />
        </div>

        <div className="alignRight">
          <label>Message*</label>
          <textarea onChange={changeMssg} required="required" value={message} />
          <div>
            <input type="submit" value="Send" />
          </div>
        </div>
      </form>
      {thanks && <div className="info">Thank you. The message has been sent.</div>}
      {error && <div className="info">Something went wrong...</div>}
    </>
  );
}
