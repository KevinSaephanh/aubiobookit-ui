import React from "react";
import { Container, Navbar, Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Routes />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </Router>
  );
}

export default App;
