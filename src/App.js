import React, {useState} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import './App.scss';

const Profile = () => (
    <h1> This is my component </h1>
)

// TODO fix this part for a better routing of the website

const App = () => {

    const isAuth = useSelector(state => state.auth.isAuth)

    return (
        <div className="main__wrapper">
            <Switch>
                <Route exact path="/">
                    {isAuth ? <Redirect to="/dashboard" /> : <Login />}
                </Route>
                <PrivateRoute component={DashBoard} path="/dashboard" exact />
            </Switch>
        </div>
    )
}

export default App;
