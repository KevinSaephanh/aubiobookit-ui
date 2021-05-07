import React from "react";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Routes from "./routes";
import "./App.css";
import AuthProvider from "./store/providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container fluid>
          <Header />
          <Routes />
          <Footer />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
