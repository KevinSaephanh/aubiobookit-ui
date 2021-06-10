import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Routes from "./routes";
import { AuthProvider } from "./store/providers/AuthProvider";
import useAxios from "./shared/hooks/useAxios";
import axios from "axios";
import "./App.scss";

function App() {
  const { data } = useAxios(
    "https://random-data-api.com/api/users/random_user?size=3"
  );

  useEffect(() => {
    // Testing httpOnly cookie
    axios.defaults.headers.common["X-CSRF-Token"] = "asdf";
    // console.log(axios.defaults.headers);
    // console.log(data);
  }, []);

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
