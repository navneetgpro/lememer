import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <nav>
                    <ul className="footmenu">
                        <li className="active">
                            <a rel="tab" href="#"><i className="fa fa-home"></i></a>
                        </li>
                        <li>
                            <a rel="tab" href="#"><i className="fa fa-hashtag"></i> </a>
                        </li>
                        <li>
                            <a rel="tab" href="#"><i className="fa fa-user"></i></a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Footer;
