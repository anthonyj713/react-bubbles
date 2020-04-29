import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import BubblePage from './components/BubblePage';


import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/'>Login</Link>
        <Switch>
        <ProtectedRoute path='/api/colors/' component={BubblePage} />
        <ProtectedRoute path='update-color/:id' component={BubblePage} />
        <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
