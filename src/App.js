import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home/Home'
import ProductDetail from './components/Home/ProductDetail/ProductDetail';

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
