import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Freedom from "./components/Freedom";
import India from "./components/India";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Header />
        <Hero />
        <Footer />
      </Route>
      <Route path="/freedom">
        <Header />
        <Freedom />
        <Footer />
      </Route>
      <Route path="/india">
        <Header />
        <India />
        <Footer />
      </Route>
    </Switch>
  </Router>
}

export default App;