import React from 'react';
import "bulma"

function addAni() {
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

                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <label className="label">Email</label>
                        <input className="input is-large" type="email" placeholder="Email"/>
                        <span className="icon is-medium is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>

                <div className="buttons">
                    <button className="button is-primary">Add</button>
                    <button className="button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default addAni;