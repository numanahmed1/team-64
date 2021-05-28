import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'
import Navbar from './components/Shared/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      {/* https://guarded-plateau-23296.herokuapp.com/ */}
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
