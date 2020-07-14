import React from 'react';
import lememer from '../../assets/lememer.png';
import { Route, NavLink } from "react-router-dom";

const Header = ({ name }) => {
    return (
        <>
            <header>
                <NavLink exact to="/">
                    <h1 id="appname"><img alt="lememer" src={lememer} /></h1>
                </NavLink>
                <NavLink exact to="/profile">
                    <div id="tabicon"><img alt={name} style={{ border: '1px solid' }} src={`//ui-avatars.com/api/?format=svg&name=${name}&rounded=true&bold=true`} /></div>
                </NavLink>
            </header>
        </>
    )
}
export default Header;
