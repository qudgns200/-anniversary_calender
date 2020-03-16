import React from 'react';
import "bulma"
import axios from 'axios';

async function getUser() {
    console.log("Hello")

    await axios.get('https://anniversary-calendar.herokuapp.com/user/1') 
    .then(function (response) { console.log(response); }) 
    .catch(function (error) { });
}

function login() {
    return (
        <div className="container">
            <form>
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <label className="label">ID</label>
                        <div className="control">
                            <input className="input is-large" type="text" placeholder="Text input"/>
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
                            <input className="input is-large" type="text" placeholder="Text input"/>
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

export default login;