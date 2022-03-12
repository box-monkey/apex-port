import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  const pages = ["about", "portfolio", "contact", "resume"];
  const [activePage, setActivePage] = useState(pages[0]);

  function navigation() {
    if (activePage === "about") {
      return <About></About>;
    } else if (activePage === "portfolio") {
      return <Portfolio></Portfolio>;
    } else if (activePage === "contact") {
      return <ContactForm></ContactForm>;
    } else if (activePage === "resume") {
      return <Resume></Resume>;
    }
  }
  return (
    <div className="App">
      <Nav
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
      ></Nav>
      <main>{navigation()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
