import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
import Chat from './pages/Chat';
import PrivateRoute from "./utils/PrivateRoute";
import './App.scss';

// TODO fix this part for a better routing of the website

const App = () => {

    const isAuth = useSelector(state => state.auth.isAuth)

    return (
        <div className="main__wrapper">
            <Switch>
                <Route exact path="/">
                    {isAuth ? <Redirect to="/dashboard" /> : <Login />}
                </Route>
                <PrivateRoute component={DashBoard} path="/dashboard"/>
                <PrivateRoute component={DashBoard} path="/profile"/>
                <PrivateRoute component={Chat} path="/chat/:id" />
            </Switch>
        </div>
    )
}

export default App;
