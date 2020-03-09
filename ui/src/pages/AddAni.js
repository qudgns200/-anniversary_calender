import React from 'react';
import "bulma"

const selectStyle = {
    flex: 1,
    width: "14em"
}

function addAni() {
    const d = new Date();
    const yearList = [];

    for(let i=1950; i<=d.getFullYear(); i++) {
        yearList.push(<option key={i} value={i}>{i}</option>)
    }

    return (
        <div className="container">
            <br/>
            <form>
                <div className="columns is-one-third">
                    <div className="column">
                        <div className="label is-large">Year</div>
                        <div className="select is-large">
                            <select style={selectStyle}>
                                {yearList}
                            </select>
                        </div>
                        <span class="icon is-large is-left">
                            <i class="fas fa-globe"></i>
                        </span>
                    </div>
                    <div className="column">
                        <div className="label is-large">Month</div>
                        <input className="input is-large" type="text" placeholder="Text input"/>
                    </div>
                    <div className="column">
                        <div className="label is-large">Day</div>
                        <input className="input is-large" type="text" placeholder="Text input"/>
                    </div>
                    
                </div>

                <div className="columns  is-one-third">
                    
                </div>

                <div className="field">
                    <span>Day</span>
                    <div className="control">
                        <input className="input is-large" type="text" placeholder="Text input"/>
                    </div>
                </div>

                <div className="field">
                    <span>Content</span>
                    <div className="control">
                        <input className="input is-large" type="text" placeholder="Text input"/>
                    </div>
                </div>

                <div className="buttons">
                    <button className="button is-primary">Confirm</button>
                    <button className="button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default addAni;