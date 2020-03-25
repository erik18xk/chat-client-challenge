import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Login from "./pages/Login";
import './App.scss';



// Test for check correct implementation of react-router.
// const Example = () => {
//     return (
//         <Link to="/more"> Go to more </Link>
//     )
// }
//
// const Another = () => {
//     return (
//         <Link to="/"> Go to Home </Link>
//     )
// }

function App() {
  return (
    <div className="main__wrapper">
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
    </div>
  );
}

export default App;
