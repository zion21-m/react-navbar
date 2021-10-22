import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup";
import Skills from "./components/Skills";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
