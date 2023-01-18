import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./composants/Error";
import Footer from "./composants/Footer";
import Header from "./composants/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/a-propos">
            <About />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
