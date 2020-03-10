import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "bulma"


function Header() {
    const [onMenu, setOnMenu] = useState("anniversary");

    function isActive(e) {
        setOnMenu(e.target.name)
    }

    return (
        <div className="container">
            <section className="hero is-small is-dark is-bold">
                <div className="hero-body has-text-centered">
                    <div className="container">
                    <h1 className="title">
                        Anniversary_Calendar
                    </h1>
                    <h2 className="subtitle">
                        by Paul
                    </h2>
                    </div>
                </div>
            </section>

            <div className="tabs is-toggle is-fullwidth is-large">
                <ul>
                    <li className={onMenu==="anniversary"?'is-active':''} onClick={isActive}>
                        <Link to="/anniversary" name="anniversary">Anniversary</Link>
                    </li>
                    <li className={onMenu==="add"?'is-active':''} onClick={isActive}>
                        <Link to="/add" name="add">Add</Link>
                    </li>
                    <li className={onMenu==="list"?'is-active':''} onClick={isActive}>
                        <Link to="/list" name="list">List</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;