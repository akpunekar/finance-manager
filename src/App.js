import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
import Form from "./components/Form";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  const [email, setEmail] = useState("");
  const [member, setMember] = useState("");
  const [isClicked, setClicked] = useState("");

  function calcForm(name, age, income, email, member) {
    setName(name);
    setAge(age);
    setIncome(income);
    setEmail(email);
    setMember(member);
  }

  function buttonClicked(isClicked) {
    setClicked(isClicked);
  }

  return (
    <div className="App">
      <Header />
      <Form clicked={buttonClicked} onCalc={calcForm} />
      <Result
        isClicked={isClicked}
        name={name}
        age={age}
        income={income}
        email={email}
        member={member}
      />
      <Footer />
    </div>
  );
}

export default App;
