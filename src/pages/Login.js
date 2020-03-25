import "../styles/pages/login.scss";
import React, { useState } from 'react';
import Button from "../components/Button";
import { useDispatch } from 'react-redux'

// TODO fix the style for this component and create input component passing element from child to parent, Add label

const Login = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        dispatch({ type: 'CHAT.DO_LOGIN', payload: {username, password}})
    }

    return (
        <div className="login__container">
            <div className="form__handler">
                <div className="form__handler__form">
                    <h1> Username </h1>
                    <input onChange={e => setUsername(e.target.value)} />
                    <h1> Password </h1>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="form__footer">
                <Button name="Submit" parentCallback={handleSubmit}></Button>
            </div>
        </div>
    )

}

export default Login;