import React from "react";
import "./index.css"
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import QuestionAndAnswer from "./QuestionAndAnswer";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Section1 />
      </div>
      <Section2 />
      <div className="container">
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <QuestionAndAnswer />
      </div>
      <Footer />

    </>
  )
}

export default App;
