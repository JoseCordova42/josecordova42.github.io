import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Container from "./components/Container/index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Container>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
