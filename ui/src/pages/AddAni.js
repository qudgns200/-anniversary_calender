import React from 'react';
import "bulma"

function addAni() {
    return (
        <div class="container">
            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <label class="label">ID</label>
                    <div class="control">
                        <input class="input is-large" type="text" placeholder="Text input"/>
                        <span class="icon is-medium is-left">
                                <i class="fas fa-user"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input is-large" type="text" placeholder="Text input"/>
                        <span class="icon is-medium is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <label class="label">Email</label>
                    <input class="input is-large" type="email" placeholder="Email"/>
                    <span class="icon is-medium is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default addAni;