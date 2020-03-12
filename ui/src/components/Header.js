import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "bulma"

function Section() {
    return(
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
    )
}


function Header() {
    const [onMenu, setOnMenu] = useState("login");
    const [id, setId] = useState("");

    function isActive(e) {
        setOnMenu(e.target.name)
    }

    if(id==="") {
        return (
            <div className="container">
                <Section/>
                <div className="tabs is-toggle is-fullwidth is-large">
                    <ul>
                        <li className={onMenu==="login"?'is-active':''} onClick={isActive}>
                            <Link to="/login" name="login">Login</Link>
                        </li>
                        <li className={onMenu==="join"?'is-active':''} onClick={isActive}>
                            <Link to="/join" name="join">Join</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <Section/>
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
    }
};

export default Header;