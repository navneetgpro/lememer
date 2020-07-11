import React from 'react';
import lememer from '../../assets/lememer.png';

const Header = ({ name }) => {
    return (
        <>
            <header>
                <h1 id="appname"><img alt="lememer" src={lememer} /></h1>
                <div id="tabicon"><img alt={name} style={{ border: '1px solid' }} src={`//ui-avatars.com/api/?format=svg&name=${name}&rounded=true&bold=true`} /></div>
            </header>
        </>
    )
}
export default Header;
