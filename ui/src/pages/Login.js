import React, { useState } from 'react';
import "bulma"
import axios from 'axios';


function Login() {
    const [id, setId] = useState();
    const [password, setPassword] = useState();

    function handleOnChange(e) {
        var t = e.target.name

        if (t === "id") {
            setId(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    async function getUser() {
        await axios.get('https://anniversary-calendar.herokuapp.com/user/' + id) 
        .then(function (response) { console.log(response); }) 
        .catch(function (error) { });
    }

    return (
        <div className="container">
            <form>
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <label className="label">ID</label>
                        <div className="control">
                            <input className="input is-large" type="text" placeholder="Text input" name="id" value={id} onChange={handleOnChange}/>
                            <span className="icon is-medium is-left">
                                    <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input is-large" type="text" placeholder="Text input" name="password" value={password} onChange={handleOnChange}/>
                            <span className="icon is-medium is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <button className="button is-fullwidth is-large is-primary" onClick={getUser}>Login</button>
                    <button className="button is-fullwidth is-large">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default Login;