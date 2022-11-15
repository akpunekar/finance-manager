import React, { useState } from "react";
import "../styles/Form.css";

function Form(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  const [email, setEmail] = useState("");
  const [member, setMember] = useState("");

  function handleSubmit(e) {
    props.clicked(isClicked);
    e.preventDefault();
    props.onCalc(name, age, income, email, member);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="firstLine"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          onClick={expand}
          name="name"
          placeholder="Enter Your Name !!!"
          required
        />
        {isExpanded && (
          <input
            className="firstLine"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Your Email"
          />
        )}
        {isExpanded && (
          <input
            className="lastLine"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            name="age"
            placeholder="Your Age"
            required
          />
        )}

        {isExpanded && (
          <input
            className="lastLine"
            value={member}
            onChange={(e) => setMember(e.target.value)}
            type="number"
            name="member"
            placeholder="Family Members"
            required
          />
        )}

        {isExpanded && (
          <input
            className="lastLine"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            type="number"
            name="income"
            placeholder="Monthly Income"
            required
          />
        )}

        {isExpanded && (
          <button
            onClick={() => {
              setClicked(true);
            }}
            type="submit"
          >
            Calculate
          </button>
        )}
      </form>
    </div>
  );
}

export default Form;
