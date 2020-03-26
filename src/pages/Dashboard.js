import React from 'react';
import Button from '../components/Button';
import { Switch, Route } from 'react-router-dom';
import ContactsList from '../components/ContactsList';
import '../styles/pages/dashboard.scss';

const DashBoard = () => {
    return (
        <div className="dashboard__container">
            <div className="buttons__handler">
                <Button
                    name="chat"
                    class="button button--inline button--dark"
                    link="/dashboard"
                    activeClassName='is-active'
                />
                <Button
                    name="profile"
                    class="button button--inline button--dark"
                    link="/profile"
                    activeClassName="is-active"
                />
            </div>
            <Switch>
                <Route path="/dashboard" exact component={ContactsList} />
                <Route path="/profile" exact>
                    <h1> Profile </h1>
                </Route>
            </Switch>
        </div>
    );

}

export default DashBoard;