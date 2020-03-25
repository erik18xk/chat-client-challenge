import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
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
    <div className="App">
        {/*<Switch>
          <Route exact path="/" component={Example} />
          <Route path="/more" component={Another} />
        </Switch>*/}
        <h1> Chat APP </h1>
    </div>
  );
}

export default App;
