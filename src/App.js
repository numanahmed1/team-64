import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home/Home'
import ProductDetail from './Components/Home/ProductDetail/ProductDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/products/:id'>
          <ProductDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
